from django.shortcuts import render


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def test(request, *args, **kwargs):
    return render(request, 'frontend/test.html')
    