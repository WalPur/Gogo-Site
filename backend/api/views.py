from rest_framework import generics 


from .serializers import CourierSerializer, PartnerSerializer
from web.models import Courier, Partner

class formCourier(generics.CreateAPIView):
    queryset = Courier.objects.all()
    serializer_class = CourierSerializer
class formPartner(generics.CreateAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer