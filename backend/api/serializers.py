from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Task, Subtask, Skill, SubtaskSkill, UserSkill, Blocker


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
            'timeOfInit',
            'noSubtasks',
            'blocker',
            'note',
        ]
        read_only_fields = ['pk']


class BlockerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blocker
        fields = [
            'pk',
            'name'
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


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = [
            'pk',
            'name',
        ]
        read_only_fields = ['pk']


class SubtaskSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubtaskSkill
        fields = [
            'pk',
            'subtask',
            'skill',
        ]
        read_only_fields = ['pk']


class UserSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkill
        fields = [
            'pk',
            'user',
            'skill',
        ]
        read_only_fields = ['pk']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'pk',
            'username', 
            'email',
            'groups',
        ]
