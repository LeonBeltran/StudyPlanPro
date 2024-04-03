from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_home, name="home"),
    path('join/', views.view_join, name="join"),
    path('logout/', views.view_logout),
]