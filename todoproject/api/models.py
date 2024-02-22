from django.db import models


class ToDoItem(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=70)
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['created',]

    def __str__(self):
        return self.content

    def switch_completion(self):
        self.completed = not self.completed
        self.save()

    def set_content(self, new_content):
        self.content = new_content
        self.save()
