from django.http import HttpResponse, JsonResponse

from .models import Task, Subtask, Skill, SubtaskSkill, UserSkill
from .serializers import TaskSerializer, SubtaskSerializer, SkillSerializer, SubtaskSkillSerializer, UserSkillSerializer
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
