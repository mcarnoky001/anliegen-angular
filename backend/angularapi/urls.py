from django.contrib import admin
from django.urls import path, include, re_path
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views

from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^login/$', auth_views.login, name='login'),
    re_path(r'^logout/$', auth_views.logout, name='logout'),
    path('', include('api.urls'), name='api'),
]
