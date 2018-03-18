from django.urls import path, include, re_path
from . import views

urlpatterns = [
    re_path(r'^tasks/(?P<pk>\d+)/$', views.TaskRudView.as_view(), name='task_rud'),
    path('tasks/', views.TaskAPIView.as_view(), name='task_api'),
]
