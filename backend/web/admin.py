from django.contrib import admin

from .models import Courier, Partner, Documents


@admin.register(Courier)
class CourierAdmin(admin.ModelAdmin):
    list_display = ['id', 'last_name', 'first_name', 'middle_name']
    list_filter = ['date', 'city']
    search_fields = ['first_name', 'last_name', 'middle_name']


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'org_name']
    list_filter = ['date', 'city']
    search_fields = ['org_name', 'full_name']


@admin.register(Documents)
class DocumentsAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    list_filter = ['title']
    search_fields = ['title']
