from django.db import models

from utils.models import CATEGORY_CARD_CHOICES, FLAG_CHOICES
from accounts.models import User


class Category(models.Model):
    name = models.CharField("Nome", max_length=255, null=False, blank=False)
    description = models.TextField("Descrição", null=True, blank=True)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.name


class Card(models.Model):
    name = models.CharField("Nome", max_length=255, null=False, blank=False)
    flag = models.CharField("Bandeira", max_length=255, choices=FLAG_CHOICES, null=False, blank=False)
    category = models.CharField("Categoria", max_length=255, choices=CATEGORY_CARD_CHOICES, null=False, blank=False) 
    last_numbers = models.DecimalField("Últimos 4 números", max_digits=4, decimal_places=0, null=True, blank=True)
    closing_day = models.IntegerField("Dia fechamento", null=False, blank=False)
    owner = models.ForeignKey(
        User, on_delete=models.PROTECT,
        verbose_name="Propietário", blank=True,
        null=True
    )

    class Meta:
        verbose_name = "Cartão"
        verbose_name_plural = "Cartões"

    def __str__(self):
        return f'{self.name} - {self.flag}'
