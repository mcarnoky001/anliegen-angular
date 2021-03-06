from django.urls import path, include, re_path
from . import views
from rest_framework.authtoken import views as auth_views

urlpatterns = [
    re_path(r'^tasks/(?P<pk>\d+)/$', views.TaskRudView.as_view(), name='task_rud'),
    path('tasks/', views.TaskAPIView.as_view(), name='task_api'),
    path('users/', views.UsersAPIView.as_view(), name='user_api'),
    re_path(r'^userbyid/(?P<pk>\d+)/$', views.UserView.as_view(), name='userbyid_rud'),
    path('userbytoken/', views.UserTokenView.as_view(), name='usertoken_api'),
    path('usertasks/', views.UserTasksAPIView.as_view(), name='usertasks_api'),
    path('newtask/', views.NewTaskRetrieveView.as_view(), name='newtask_api'),
    path('blockers', views.BlockersAPIView.as_view(), name="blockers_api"),
    re_path(r'^usertasks/(?P<status>\d+)/$', views.UserTasksAPIView.as_view(), name='usertasks_api'),
    re_path(r'^subtasks/(?P<pk>\d+)/$', views.SubTaskRudView.as_view(), name='subtask_rud'),
    path('subtasks/', views.SubTaskAPIView.as_view(), name='subtask_api'),
    re_path(r'^skills/(?P<pk>\d+)/$', views.SkillRudView.as_view(), name='skill_rud'),
    path('skills/', views.SkillAPIView.as_view(), name='skill_api'),
    re_path(r'^subtaskskills/(?P<pk>\d+)/$', views.SubtaskSkillRudView.as_view(), name='subtaskskill_rud'),
    path('subtaskskillsrud/', views.SubtaskSkillAPIView.as_view(), name='subtaskskillrud_api'),
    path('subtaskskills/', views.SubtaskSkillView.as_view(), name='subtaskskill_api'),
    re_path(r'^userskills/(?P<pk>\d+)/$', views.UserSkillRudView.as_view(), name='userskill_rud'),
    path('userskills/', views.UserSkillView.as_view(), name='userskill_api'),
    path('userskilldelete/', views.UserSkillDeleteView.as_view(), name='userskilldelete_api'),
    path('userskillcreate/', views.UserSkillCreateView.as_view(), name='userskillcreate_api'),
    path('userskillsrud/', views.UserSkillAPIView.as_view(), name='userskillrud_api'),
]

urlpatterns += [
    re_path(r'^api-token-auth/', auth_views.obtain_auth_token)
]
