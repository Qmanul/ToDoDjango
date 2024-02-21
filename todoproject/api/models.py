from django.contrib.auth.models import User
from django.db import models


class ToDoItem(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=70)
    completed = models.BooleanField()

    class Meta:
        ordering = ['created',]

    def __str__(self):
        return self.content
