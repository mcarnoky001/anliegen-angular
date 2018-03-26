from django.contrib import admin
from .models import Task, Subtask, Skill, UserSkill, SubtaskSkill

# Register your models here.

admin.site.register(Task)
admin.site.register(Subtask)
admin.site.register(Skill)
admin.site.register(UserSkill)
admin.site.register(SubtaskSkill)
