# For OAuth
# Create url patterns for home and logout screen

from django.urls import path
from . import views

urlpatterns = [
    #path('', views.home),
    path('login/', views.home),
    path('loggedin/', views.loggedin),
    path('loggedout/', views.logout_view)

]