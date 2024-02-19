from django.urls import path
from . import views

appname = 'todoapp'
urlpatterns = [
    path('todo/', views.ToDoList.as_view(), name='todo-list',),
    path('todo/<int:pk>/', views.ToDoDetail.as_view(), name='todo-detail', ),
    path('users/', views.UserList.as_view(), name='user-list', ),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail', ),
]
