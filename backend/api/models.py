from django.db import models
from django.conf import settings

from rest_framework.reverse import reverse as api_reverse


class Task(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    description = models.TextField()
    contractId = models.IntegerField()
    status = models.IntegerField()
    timeOfInit = models.DateTimeField()
    noSubtasks = models.IntegerField()
    blocker = models.CharField(max_length=200, blank=True, null=True)
    note = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def owner(self):
        return self.user


class Subtask(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    description = models.TextField()
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    status = models.IntegerField()

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class SubtaskSkill(models.Model):
    subtask = models.ForeignKey(Subtask, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)


class UserSkill(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
