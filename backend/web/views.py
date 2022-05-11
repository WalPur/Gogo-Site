from urllib import request
# TODO: не нужный импорт, нет форматирования документа
from django.shortcuts import render

def index(request):
    return render(request, "index.html")