from __future__ import unicode_literals

from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _

from .managers import MemberManager

# Create your models here.
# class Tutorial(models.Model):
#     title = models.CharField(max_length=70, blank=False, default='')
#     description = models.CharField(max_length=200, blank=False, default='')
#     published = models.BooleanField(default=False)

class Member(AbstractBaseUser, PermissionsMixin):
    nickname = models.CharField(_('nickname'), max_length=255, blank=True)
    email = models.EmailField(_('email'), unique=True)
    is_active = models.BooleanField(_('is_active'), default=True)
    role = models.IntegerField(_('role'), default=1)
    bid = models.IntegerField(_('bid'), default=1)
    lastPropose = models.DateTimeField(_('lastPropose'), auto_now_add=False)
    # role = 1 : not allowed user
    # role = 3 : general user
    # role = 7 : manager user
    # role = 1023 : super user
    amazon_email = models.EmailField(_('amazon_email'))
    amazon_password = models.CharField(_('amazon_password'), max_length=255)

    objects = MemberManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = _('member')
        verbose_name_plural = _('members')
        db_table = "members"

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        nickname = self.nickname
        return nickname.strip()

    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.nickname

    def email_user(self, subject, message, from_email=None, **kwargs):
        '''
        Sends an email to this User.
        '''
        send_mail(subject, message, from_email, [self.email], **kwargs)