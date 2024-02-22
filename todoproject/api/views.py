from rest_framework import viewsets
from rest_framework.decorators import action
from http import HTTPMethod

from rest_framework.response import Response

from .models import ToDoItem
from .serializers import ToDoItemSerializer


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer

    @action(methods=[HTTPMethod.POST], detail=True)
    def set_completion(self, request, pk=None):
        todo = self.get_object()
        todo.completed = not todo.completed
        todo.save()
        return Response({"message": f"Completion of '{todo.id}' was set to {todo.completed}."}, status=200)
