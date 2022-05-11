from django.urls import path

from .views import formCourier, formPartner, formDocuments

urlpatterns = [
    path('courier/', formCourier.as_view(), name='courier-form'),
    path('partner/', formPartner.as_view(), name='partner-form'),
    path('documents/', formDocuments.as_view(), name="documents-form"),
]
