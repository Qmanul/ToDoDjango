from django.urls import path
from . import views

appname = 'api'
urlpatterns = [
    path('todo/', views.ToDoListView.as_view(), name='todo-list', ),
    path('todo/<int:pk>/', views.ToDoDetailView.as_view(), name='todo-detail', ),
]
