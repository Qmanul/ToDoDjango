from rest_framework import serializers
from .models import ToDoItem


class ToDoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = ['id', 'created', 'content', 'completed', ]


class ContentSerializer(serializers.ModelSerializer):
    content = serializers.CharField(write_only=True, required=True, max_length=70)

    class Meta:
        model = ToDoItem
        fields = ['content']
