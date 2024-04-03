from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_home),
    path('logout/', views.view_logout),
]