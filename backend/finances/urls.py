from django.urls import path

from . import views

urlpatterns = [
  path('', views.show, name='listing-custs')
]

app_name = 'finances'