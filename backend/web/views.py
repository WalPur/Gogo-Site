# TODO: нет форматирования документа
from django.shortcuts import render


def index(request):
    return render(request, "index.html")