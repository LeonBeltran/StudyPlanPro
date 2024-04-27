from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_flowchart, name="flowchart2"),
    path('othercourses/', views.view_othercourses, name="othercourses2"),
    path('recommendations/', views.view_recommendations, name="recommendations2")
]