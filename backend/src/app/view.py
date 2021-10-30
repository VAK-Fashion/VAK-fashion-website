
from django.shortcuts import render


def error_404_view(request, exception):
    return render(request, 'index.html')


def index(request):

    return render(request, "index.html")
