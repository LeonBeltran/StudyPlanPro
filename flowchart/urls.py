from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_flowchart, name="flowchart"),
    path('othercourses/', views.view_othercourses, name="othercourses"),
    path('recommendations/', views.view_recommendations, name="recommendations")
]