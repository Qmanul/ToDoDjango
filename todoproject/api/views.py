from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .models import ToDoItem
from .serializers import ToDoItemSerializer, UserSerializer


class ToDoListView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ToDoDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
