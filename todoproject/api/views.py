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

    @action(methods=[HTTPMethod.PATCH], detail=True)
    def update_completion(self, request, pk=None):
        """
        switches item's completion
        """
        todo = self.get_object()
        todo.switch_completion()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(methods=[HTTPMethod.PATCH], detail=True,)
    def update_content(self, request, pk=None):
        """
        updates item's content
        """
        todo = self.get_object()
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            todo.set_content(serializer.validated_data['content'])
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
