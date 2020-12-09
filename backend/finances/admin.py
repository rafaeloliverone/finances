from django.contrib import admin

from .models import Card, Category


class CardAdmin(admin.ModelAdmin):
    list_display = ('name', 'flag', 'category', 'owner', )
    fields = ('name', 'flag', 'category', 'last_number', 'closing_day', 'owner', )


admin.site.register(Card, CardAdmin)
