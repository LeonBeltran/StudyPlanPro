from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    passedCourses = ArrayField(models.CharField(max_length=50), max_size=53, blank=True)
    failedCourses = ArrayField(models.CharField(max_length=50), max_size=53, blank=True)
    systemReview = models.CharField(max_length=500)

class Course(models.Model):
    courseTitle = models.CharField(max_length=100)
    shortDescription = models.CharField(max_length=300)
    courseProfessors = models.CharField(max_length=300)
    coursePolicies = models.CharField(max_length=300, blank=True)
    nominalCourseDifficultyReview = models.IntegerField()
    courseReview = ArrayField(models.CharField(max_length=500), blank=True)
    courseDemand = models.IntegerField()
    passingRate = models.FloatField()