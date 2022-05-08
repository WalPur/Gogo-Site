from rest_framework import serializers

from web.models import Courier, Partner


class CourierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courier
        fields = (
            "id",
        )
class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = (
            "id",
        )