from django.urls import path
from . import views

appname = 'api'
urlpatterns = [
    path('todo/', views.ToDoListView.as_view(), name='todo-list', ),
    path('todo/<int:pk>/', views.ToDoDetailView.as_view(), name='todo-detail', ),
    path('users/', views.UserListView.as_view(), name='user-list', ),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='user-detail', ),
]
