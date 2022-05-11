# TODO: Форматируйте документ, сортируйте импорты
from rest_framework import generics


from .serializers import CourierSerializer, PartnerSerializer  # TODO: нужно писать полный путь по типу from api.serializers import ...
from web.models import Courier, Partner

class formCourier(generics.CreateAPIView):
    queryset = Courier.objects.all()
    serializer_class = CourierSerializer
class formPartner(generics.CreateAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
