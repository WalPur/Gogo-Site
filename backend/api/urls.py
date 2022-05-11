from django.urls import path

from .views import formCourier, formPartner

urlpatterns = [
    path('courier/', formCourier.as_view(), name='courier form'),  # TODO: надо называть пути по разному, совпадение названий перезаписывает имя пути, также нейминг путей попробуйте делать через тире по типу courier-form
    path('partner/', formPartner.as_view(), name='courier form')  # TODO: в конце надо ставить запятую, можете прогуглить про термин "Висячая запятая", опечатка в имени
]
