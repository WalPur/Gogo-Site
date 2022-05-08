from django.db import models

class Courier(models.Model):
    """ Модель заявки курьера """

    city = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255)
    number = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    date = models.DateTimeField(auto_now=True)

class Partner(models.Model):
    """ Модель заявки партнера"""

    org_name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    org_number = models.CharField(max_length=255)
    org_email = models.EmailField(max_length=255)
    date = models.DateTimeField(auto_now=True)