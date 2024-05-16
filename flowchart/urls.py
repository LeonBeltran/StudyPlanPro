from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_flowchart, name="flowchart"),
    path('course_description/', views.course_description, name='course_description'),
    path('add_course_review/', views.add_course_review, name='add_course_review'),
    # path('othercourses/', views.view_othercourses, name="othercourses"),
    path('recommendations/', views.view_recommendations, name="recommendations")
]