from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_demand, name="demand2")
]