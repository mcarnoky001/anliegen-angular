from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    # url         = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Task
        fields = [
            # 'url',
            'pk',
            'name',
            'user',
            'description',
            'contractId',
            'status',
        ]
        read_only_fields = ['id']

    # converts to JSON
    # validations for data passed

    # def get_url(self, obj):
    #     # request
    #     request = self.context.get("request")
    #     return obj.get_api_url(request=request)
