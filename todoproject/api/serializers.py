from django.contrib.auth.models import User
from rest_framework import serializers
from .models import ToDoItem


class ToDoItemSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = ToDoItem
        fields = ['created', 'content', 'owner',]


class UserSerializer(serializers.ModelSerializer):
    user_items = serializers.PrimaryKeyRelatedField(many=True, queryset=ToDoItem.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'user_items',]
