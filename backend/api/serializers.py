from rest_framework import serializers

from web.models import Courier, Partner, Documents

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
            "type",
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


class DocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documents
        fields = (
            "id",
            "title",
            "document",
        )
