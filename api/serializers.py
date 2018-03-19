from rest_framework import serializers

from .models import Task, Subtask


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            'pk',
            'name',
            'user',
            'description',
            'contractId',
            'status',
        ]
        read_only_fields = ['pk']


class SubtaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtask
        fields = [
            'pk',
            'name',
            'user',
            'description',
            'task',
            'status',
        ]
        read_only_fields = ['pk']
