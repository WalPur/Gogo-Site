from rest_framework import serializers

from web.models import Courier, Partner, Documents


class CourierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courier
        fields = (
            "id",
            "city",
            "last_name",
            "first_name",
            "middle_name",
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
