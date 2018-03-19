from django.urls import path, include, re_path
from . import views

urlpatterns = [
    re_path(r'^tasks/(?P<pk>\d+)/$', views.TaskRudView.as_view(), name='task_rud'),
    path('tasks/', views.TaskAPIView.as_view(), name='task_api'),
    re_path(r'^subtasks/(?P<pk>\d+)/$', views.SubTaskRudView.as_view(), name='subtask_rud'),
    path('subtasks/', views.SubTaskAPIView.as_view(), name='subtask_api'),
    re_path(r'^skills/(?P<pk>\d+)/$', views.SkillRudView.as_view(), name='skill_rud'),
    path('skills/', views.SkillAPIView.as_view(), name='skill_api'),
    re_path(r'^subtaskskills/(?P<pk>\d+)/$', views.SubtaskSkillRudView.as_view(), name='subtaskskill_rud'),
    path('subtaskskills/', views.SubtaskSkillAPIView.as_view(), name='subtaskskill_api'),
    re_path(r'^userskills/(?P<pk>\d+)/$', views.UserSkillRudView.as_view(), name='userskill_rud'),
    path('userskills/', views.UserSkillAPIView.as_view(), name='userskill_api'),
]
