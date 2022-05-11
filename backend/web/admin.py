from django.contrib import admin

from .models import Courier, Partner

admin.site.register(Courier)  # TODO: заменить как на пример с партнерами


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'org_name']
    list_filter = ['date', 'city']
    search_fields = ['org_name', 'full_name']
