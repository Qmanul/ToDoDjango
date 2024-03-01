from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from http import HTTPMethod
from . import customviewsets
from .models import ToDoItem
from .serializers import ToDoItemSerializer, ContentSerializer


class ToDoView(customviewsets.CreateRetrieveDestroyListViewSet):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['completed']

    @action(methods=[HTTPMethod.POST], detail=True,
            url_path='switch-completion')
    def update_completion(self, request, pk=None):
        """
        switch item's completion
        """
        todo = self.get_object()
        serializer = self.get_serializer(todo, data={'completed': not todo.completed}, partial=True)
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=[HTTPMethod.POST], detail=True,
            url_path='update-content')
    def update_content(self, request, pk=None):
        """
        update item's content
        """
        print(request.data)
        content_serializer = ContentSerializer(data=request.data)
        if not content_serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)

        todo = self.get_object()
        serializer = self.get_serializer(todo, data=content_serializer.validated_data, partial=True)

        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
