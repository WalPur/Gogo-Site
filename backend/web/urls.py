from django.urls import path
from .views import *  # TODO: лучше использовать прямой импорт, from web.views import index


urlpatterns = [
    path('/', index),  # TODO: слеш не нужен
]