from rest_framework.response import Response
# from rest_framework import permissions  # <-- Here
from .models import Member
from rest_framework.views import APIView
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.models import Token

from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import json
from django.contrib.auth.hashers import check_password
from django.core import serializers
from validate_email import validate_email


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def register(request):
    code = 401
    errors = {}
    user = {}
    email = request.data.get('email')
    password = request.data.get('password')
    nickname = request.data.get('nickname')
    if not email:
        code = 300
        errors['email'] = "Require email"
    elif not password:
        code = 300
        errors['password'] = "Require password"
    elif len(password) < 4:
        code = 300
        errors['password'] = "Minimum length of password is 4"
    if not nickname:
        code = 300
        errors['nickname'] = "Require nickname"
    else:
        if Member.objects.filter(email=email).exists():
            code = 400
            errors['email'] = "Existing user"
        else:
            user = Member.objects.create_user(nickname=nickname, email=email, password=password, amazon_email="", amazon_password="")
            code = 200
    if code == 200:
        return Response({
            'code': code,
            'content': {
                'email': user.email,
                'nickname': user.nickname,
                'role': user.role,
                'is_active': user.is_active,
                'amazon_email': user.amazon_email,
                'amazon_password': user.amazon_password,
            },
        })
    else:
        return Response({
            'code': code,
            'content': {},
            'errors': errors,
        })


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def login(request):
    code = 401
    errors = {}
    email = request.data.get('email')
    password = request.data.get('password')
    member = {}
    token = ""
    if not email:
        code = 300
        errors['email'] = "Require email"
    elif not password:
        code = 300
        errors['password'] = "Require password"
    elif len(password) < 4:
        code = 300
        errors['password'] = "Minimum length of password is 4"
    else:
        if Member.objects.filter(email=email).exists():
            member = Member.objects.get(email=email)
            valid_pwd = check_password(password, member.password)
            if valid_pwd:
                try:
                    token = Token.objects.get(user=member)
                except :
                    token = Token.objects.create(user=member)
                code = 200
            else:
                errors['auth'] = "Unauthorized user"
                code = 401
        else:
            code = 404
            errors['auth'] = "Not registered"
    if code == 200:
        return Response({
            'code': code,
            'content': {
                'token': token.key,
                'email': member.email,
                'nickname': member.nickname,
                'role': member.role,
                'is_active': member.is_active,
                'is_superuser': member.is_superuser,
                'amazon_email': member.amazon_email,
                'amazon_password': member.amazon_password,
                'bid': member.bid,
                'lastPropose': member.lastPropose,
            },
        })
    else:
        return Response({
            'code': code,
            'content': {},
            'errors': errors,
        })

@api_view(['POST'])
@authentication_classes([BasicAuthentication, TokenAuthentication])
@permission_classes([])
def update(request):
    code = 401
    errors = {}
    email = request.data.get('email')
    nickname = request.data.get('nickname')
    amazon_email = request.data.get('amazon_email')
    amazon_password = request.data.get('amazon_password')
    email_old = request.user
    if not email:
        code = 300
        errors['email'] = "Require email"
    elif not nickname:
        code = 300
        errors['nickname'] = "Require nickname"
    elif Member.objects.filter(email=email_old).exists():
        member = Member.objects.get(email=email_old)
        member.email = email
        member.nickname = nickname
        member.amazon_email = amazon_email
        member.amazon_password = amazon_password
        member.save()
        code = 200
    else:
        code = 401
    if code == 200:
        return Response({
            'code': code,
            'content': {
                'email': member.email,
                'nickname': member.nickname,
                'role': member.role,
                'is_active': member.is_active,
                'is_superuser': member.is_superuser,
                'amazon_email': member.amazon_email,
                'amazon_password': member.amazon_password,
            },
        })
    else:
        return Response({
            'code': code,
            'errors': errors,
        })

@api_view(['GET'])
@authentication_classes([BasicAuthentication, TokenAuthentication])
@permission_classes([])
def selfInfo(request):
    code = 401
    email = request.user
    content = {}
    errors = {}
    if Member.objects.filter(email=email).exists():
        member = Member.objects.get(email=email)
        code = 200
        content = {
            'email': member.email,
            'nickname': member.nickname,
            'role': member.role,
            'is_active': member.is_active,
            'is_superuser': member.is_superuser,
            'amazon_email': member.amazon_email,
            'bid': member.bid,
            'lastPropose': member.lastPropose,
        }
    else:
        code = 404
        errors.email = "Not registered"
    if code == 200:
        return Response({
            'code': code,
            'content': content,
        })
    else:
        return Response({
            'code': code,
            'content': {},
            'errors': errors
        })
  

@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication, TokenAuthentication])
@permission_classes([])
def getAllUsers(request, format=None):
    code = 401
    member = Member.objects.get(email=request.user)
    members_list = []
    if member.role == 1023:
        members = Member.objects.filter()
        members_list = serializers.serialize('json', members)
        code = 200
    else:
        code = 401
    return Response({
        'code': code,
        'content': members_list,
    })

@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication, TokenAuthentication])
@permission_classes([])
def updateRole(request, id):
    code = 401
    role = request.data.get('role')
    admin = Member.objects.get(email=request.user)
    errors = {}
    if admin.role == 1023:
        member = Member.objects.get(id=id)
        member.role = role
        member.save()
        code = 200
    else:
        errors['auth'] = "Unauthorized"
        code = 401
    if code == 200:
        return Response({
            'code': code,
        })
    else:
        return Response({
            'code': code,
            'errors': errors,
        })
        

