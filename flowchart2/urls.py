from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_flowchart, name="flowchart2"),
    path('course_description/', views.course_description, name='course_description'),
    path('add_course_review/', views.add_course_review, name='add_course_review2'),
    path('othercourses/', views.view_othercourses, name="othercourses2"),
    path('recommendations/', views.view_recommendations, name="recommendations2")
]