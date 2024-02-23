from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response
from http import HTTPMethod
from .models import ToDoItem
from .serializers import ToDoItemSerializer, ContentSerializer


class CustomViewSets:
    class CreateRetrieveDestroyListViewSet(mixins.CreateModelMixin,
                                           mixins.RetrieveModelMixin,
                                           mixins.DestroyModelMixin,
                                           mixins.ListModelMixin,
                                           viewsets.GenericViewSet):
        pass


class ToDoView(CustomViewSets.CreateRetrieveDestroyListViewSet):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer

    @action(methods=[HTTPMethod.POST], detail=True,
            url_path='switch-completion')
    def update_completion(self, request, pk=None):
        """
        switches item's completion
        """
        todo = self.get_object()
        data = {'completed': not todo.completed}
        serializer = self.get_serializer(todo, data=data, partial=True)
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=[HTTPMethod.POST], detail=True,
            url_path='update-content')
    def update_content(self, request, pk=None):
        """
        updates item's content
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
