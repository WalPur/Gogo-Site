from django.db import models
# TODO: не хватает форматирования документа


class CourierTypes(models.TextChoices):
    """Типы курьеров."""

    WALK = 'WALK'
    BYCYCLE = 'BYCYCLE'
    MOTORBIKE = 'MOTORBIKE'
    CAR = 'CAR'


class Courier(models.Model):
    """Модель заявки курьера."""

    city = models.CharField(max_length=255, verbose_name="Город")  
    surname = models.CharField(max_length=255, verbose_name="Фамилия")  # TODO: last_name
    name = models.CharField(max_length=255, verbose_name="Имя")  # TODO: first_name
    patronymic = models.CharField(max_length=255, verbose_name="Отчество")  # TODO: middle_name
    number = models.CharField(max_length=255, verbose_name="Номер телефона")
    email = models.EmailField(max_length=255, verbose_name="Эл. почта")
    date = models.DateTimeField(auto_now=True, verbose_name="Время отправки формы")
    type = models.CharField(
        choices=CourierTypes.choices,
        max_length=128,
        default=CourierTypes.WALK,
        verbose_name="Тип курьера"
    )

    def __str__(self):
        return f'{self.number}: {self.name} {self.surname} {self.patronymic}'

    class Meta:
        verbose_name = 'Заявка курьера'
        verbose_name_plural = 'Заявки курьеров'


class Partner(models.Model):
    """Модель заявки партнера."""

    org_name = models.CharField(max_length=255, verbose_name="Название организации")
    city = models.CharField(max_length=255, verbose_name="Город")
    full_name = models.CharField(max_length=255, verbose_name="ФИО ответственного")
    org_number = models.CharField(max_length=255, verbose_name="Номер телефона")
    org_email = models.EmailField(max_length=255, verbose_name="Эл. почта")
    date = models.DateTimeField(auto_now=True, verbose_name="Время отправки формы")

    def __str__(self):
        return f'{self.org_number}: {self.org_name} - {self.full_name}'

    class Meta:
        verbose_name =  'Заявка партнера'
        verbose_name_plural = 'Заявки партнеров'


class Documents(models.Model):
    """Модель отображаемых документов."""

    title = models.CharField(max_length=255, verbose_name="Название документа")
    document = models.FileField(upload_to="documents/")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Документы"
        verbose_name_plural = "Документы"
