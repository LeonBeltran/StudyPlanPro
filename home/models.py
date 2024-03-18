from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 

# Create your models here.
class Course(models.Model):
    courseCode = models.CharField(max_length=30)
    courseTitle = models.CharField(max_length=100)
    shortDescription = models.CharField(max_length=300, blank=True)
    courseProfessors = models.CharField(max_length=300, blank=True)
    coursePolicies = models.CharField(max_length=300, blank=True)
    nominalCourseDifficultyReview = models.IntegerField(default=3, validators=[MinValueValidator(1), MaxValueValidator(5)])
    courseDemand = models.IntegerField(null=True, blank=True)
    passingRate = models.FloatField(null=True, blank=True)

class CourseReview(models.Model):
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    courseReview = models.CharField(max_length=500, blank=True)

class StudentPassedCourse(models.Model):
    course = models.OneToOneField(Course, on_delete = models.CASCADE)
    
class StudentFailedCourse(models.Model):
    course = models.OneToOneField(Course, on_delete = models.CASCADE)

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    systemReview = models.CharField(max_length=500, blank=True)
    passedCourses = models.ManyToManyField(StudentPassedCourse, blank=True)
    failedCourses = models.ManyToManyField(StudentFailedCourse, blank=True)