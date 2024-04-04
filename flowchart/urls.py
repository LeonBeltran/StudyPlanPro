from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_flowchart),
    path('othercourses/', views.view_othercourses)
]