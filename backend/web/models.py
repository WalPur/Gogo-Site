from django.db import models
# TODO: не хватает форматирования документа
class CourierTypes(models.TextChoices):
    """Типы курьеров"""  # TODO: в конце точка

    WALK = 'WALK'
    BYCYCLE = 'BYCYCLE'
    MOTORBIKE = 'MOTORBIKE'
    CAR = 'CAR'

class Courier(models.Model):
    """ Модель заявки курьера """  # TODO: без отступов по бокам и точку в конце

    city = models.CharField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    surname = models.CharField(max_length=255)  # TODO: last_name, добавить verbose_name параметр для пользователей
    name = models.CharField(max_length=255)  # TODO: first_name, добавить verbose_name параметр для пользователей
    patronymic = models.CharField(max_length=255)  # TODO: middle_name, добавить verbose_name параметр для пользователей
    number = models.CharField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    email = models.EmailField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    date = models.DateTimeField(auto_now=True)  # TODO: добавить verbose_name параметр для пользователей
    type = models.CharField(  # TODO: добавить verbose_name параметр для пользователей
        choices=CourierTypes.choices,
        max_length=128,
        default=CourierTypes.WALK,
    )

    def __str__(self):
        return f'{self.number}: {self.name} {self.surname} {self.patronymic}'

    class Meta:
        verbose_name =  'Заявка курьера'
        verbose_name_plural = 'Заявки курьеров'


class Partner(models.Model):  # TODO: не хватает как для класса курьеров параметров verbose name для отображаемого имени и функции __str__ для отображения обьекта
    """ Модель заявки партнера"""

    org_name = models.CharField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    city = models.CharField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    full_name = models.CharField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    org_number = models.CharField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    org_email = models.EmailField(max_length=255)  # TODO: добавить verbose_name параметр для пользователей
    date = models.DateTimeField(auto_now=True)  # TODO: добавить verbose_name параметр для пользователей