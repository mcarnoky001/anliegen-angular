from django.db import models
from django.conf import settings

from rest_framework.reverse import reverse as api_reverse


class Task(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    description = models.TextField()
    contractId = models.IntegerField()
    status = models.IntegerField()

    def __str__(self):
        return self.name

    @property
    def owner(self):
        return self.user

    # def get_api_url(self, request=None):
    #     return api_reverse("api_tasks:task-rud", kwargs={'pk': self.pk}, request=request)
