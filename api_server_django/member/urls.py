from django.conf.urls import url
from django.urls import path
from . import api_views as member_api
# from tutorials import views

urlpatterns = [
    # url(r'^api/tutorials$', views.tutorial_list),
    # url(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
    # url(r'^api/tutorials/published$', views.tutorial_list_published),
    path('register', member_api.register, name="Register"),
    path('login', member_api.login, name="Login"),
    path('selfInfo', member_api.selfInfo, name="SelfInfo"),
    path('update', member_api.update, name="SelfUpdate"),
    path('getAllUsers', member_api.getAllUsers, name="getAllUsers")
]