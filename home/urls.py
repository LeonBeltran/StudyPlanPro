from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_home, name="home"),
    path('login/', views.view_login, name="login"),
    path('logout/', views.view_logout, name="logout"),
    path('join/', views.view_join, name="join"),
]