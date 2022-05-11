from rest_framework import serializers

from web.models import Courier, Partner

# TODO: форматирование
class CourierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courier
        fields = (
            "id",
            "city",
            "surname",
            "name",
            "patronymic",
            "number",
            "email",
            "type"
        )
class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = (
            "id",
            "org_name",
            "city",
            "full_name",
            "org_number",
            "org_email",
        )
