from django.http import HttpResponse, JsonResponse

from .models import Task
from .serializers import TaskSerializer
from rest_framework import generics, mixins
from django.db.models import Q
from .permissions import IsOwnerOrReadOnly
# Create your views here.

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

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        print(request.data)
        return self.create(request, *args, **kwargs)

class TaskRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field        = 'pk'
    serializer_class    = TaskSerializer
    # permission_classes  = [IsOwnerOrReadOnly]

    def get_queryset(self):
        return Task.objects.all()
