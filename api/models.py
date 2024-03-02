from django.db import models


class ToDoItem(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=70)
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['id',]

    def __str__(self):
        return self.content
