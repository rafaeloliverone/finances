from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    cpf = models.CharField("Cpf", max_length=14, unique=True, null=False, blank=False)

