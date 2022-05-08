from django.urls import path 

from .views import formCourier, formPartner

urlpatterns = [
    path('courier/', formCourier.as_view(), name='courier form'),
    path('partner/', formPartner.as_view(), name='courier form')
]
