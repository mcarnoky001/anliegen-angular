from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.contrib.auth.models import User
from .models import Task, Subtask, Skill, SubtaskSkill, UserSkill, Blocker
from .serializers import BlockerSerializer, TaskSerializer, SubtaskSerializer, SkillSerializer, SubtaskSkillSerializer, UserSkillSerializer, UserSerializer
from rest_framework import generics, mixins
from django.db.models import Q
from rest_framework.authtoken.models import Token

class TaskAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = TaskSerializer

    def get_queryset(self):
        qs = Task.objects.all()
        query = self.request.GET.get("q")
        if(query) is not None:
            qs = qs.filter(
                    Q(name__icontains=query)|
                    Q(description__icontains=query)
                    ).distinct()
        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class UserTasksAPIView(generics.ListAPIView):
    lookup_field        = 'status'
    serializer_class    = TaskSerializer

    def get_queryset(self):
        qs = Task.objects.all()
        try:
            token = self.request.META['HTTP_AUTHORIZATION']          
        except:
            token=''
            print('NOT AUTHORIZED')
        tokenObj = Token.objects.get(key=token)
        if tokenObj is not None:
            qs = Task.objects.filter(user=tokenObj.user_id)
            status = self.request.GET.get('status')
            qs = qs.filter(status = status)
        return qs


class BlockersAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = BlockerSerializer

    def get_queryset(self):
        qs = Blocker.objects.all()
        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class NewTaskRetrieveView(generics.ListAPIView):
    lookup_field        = 'status'
    serializer_class    = TaskSerializer
    def get_queryset(self):
        qs = Task.objects.all()
        try:
            token = self.request.META['HTTP_AUTHORIZATION']      
        except:
            token=''
            print('NOT AUTHORIZED')
        tokenObj = Token.objects.get(key=token)
        if tokenObj is not None:
            task = qs.filter(status = 0)[:1].get()
            task.user_id = tokenObj.user_id
            task.save()
            print(task)
        return qs


class TaskRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field        = 'pk'
    serializer_class    = TaskSerializer

    def get_queryset(self):
        return Task.objects.all()


class SubTaskAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = SubtaskSerializer
    def get_queryset(self):
        qs = Subtask.objects.all()
        query = self.request.GET.get("q")
        taskId = self.request.GET.get("id")
        if(query) is not None:
            qs = qs.filter(
                    Q(name__icontains=query)|
                    Q(description__icontains=query)
                    ).distinct()
        if(taskId) is not None:
            qs = qs.filter(Q(task=taskId))
        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SubTaskRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field        = 'pk'
    serializer_class    = SubtaskSerializer

    def get_queryset(self):
        return Subtask.objects.all()


class SkillAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = SkillSerializer
    def get_queryset(self):
        qs = Skill.objects.all()
        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SkillRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field        = 'pk'
    serializer_class    = SkillSerializer

    def get_queryset(self):
        return Skill.objects.all()


class SubtaskSkillAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = SubtaskSkillSerializer
    def get_queryset(self):
        qs = SubtaskSkill.objects.all()
        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SubtaskSkillRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field        = 'pk'
    serializer_class    = SubtaskSkillSerializer

    def get_queryset(self):
        return SubtaskSkill.objects.all()


class UserSkillAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = UserSkillSerializer
    def get_queryset(self):
        qs = UserSkill.objects.all()
        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class UserSkillRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field        = 'pk'
    serializer_class    = UserSkillSerializer

    def get_queryset(self):
        return UserSkill.objects.all()


class UserView(generics.RetrieveAPIView):
    lookup_field        = 'pk'
    serializer_class    = UserSerializer

    def get_queryset(self):
        qs = User.objects.all()
        id = self.request.GET.get("id")
        if(id) is not None:
            qs = qs.filter(pk=id)
        return qs



class UserTokenView(generics.RetrieveAPIView):
    pass
    model       = User
    serializer_class    = UserSerializer

    def retrieve(self, request, pk=None):
        token = self.request.GET.get('token')
        tokenObj = Token.objects.get(key=token)
        user = User.objects.filter(pk=tokenObj.user_id)
        data = serializers.serialize('json', list(user))
        return HttpResponse(data, content_type="application/json")


class SubtaskSkillView(generics.RetrieveAPIView):
    pass
    model       = SubtaskSkill
    serializer_class    = SubtaskSkillSerializer

    def retrieve(self, request, pk=None):
        subtask_id = self.request.GET.get('id')
        skills = SubtaskSkill.objects.filter(subtask=subtask_id)
        skillsArray = []
        for s in skills:
            skillsArray.append(s.skill)
        data = serializers.serialize('json', list(skillsArray))
        return HttpResponse(data, content_type="application/json")


class UserSkillView(generics.RetrieveAPIView):
    pass
    model       = UserSkill
    serializer_class    = UserSkillSerializer

    def retrieve(self, request, pk=None):
        user_id = self.request.GET.get('id')
        skills = UserSkill.objects.filter(user=user_id)
        skillsArray = []
        for s in skills:
            skillsArray.append(s.skill)
        data = serializers.serialize('json', list(skillsArray))
        return HttpResponse(data, content_type="application/json")

class UsersAPIView(generics.ListAPIView):
    lookup_field        = 'pk'
    serializer_class    = UserSerializer

    def get_queryset(self):
        qs = User.objects.all()
        query = self.request.GET.get("q")
        group = self.request.GET.get("g")
        if(query) is not None:
            qs = qs.filter(Q(username__icontains=query)).distinct()
        if(group) is not None:
            qs = qs.filter(groups=group)
        return qs