from rest_framework import generics
from .models import ToDoItem
from .serializers import ToDoItemSerializer


class ToDoListView(generics.ListCreateAPIView):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer


class ToDoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer
