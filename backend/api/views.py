# TODO: Форматируйте документ, сортируйте импорты
from xml.dom.minidom import Document
from rest_framework import generics


from api.serializers import CourierSerializer, PartnerSerializer, DocumentsSerializer
from web.models import Courier, Partner, Documents


class formCourier(generics.CreateAPIView):
    queryset = Courier.objects.all()
    serializer_class = CourierSerializer


class formPartner(generics.CreateAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer


class formDocuments(generics.ListAPIView):
    queryset = Documents.objects.all()
    serializer_class = DocumentsSerializer
