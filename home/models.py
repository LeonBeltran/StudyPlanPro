from django.db import models

# Create your models here.
class Course(models.Model):
    courseCode = models.CharField(max_length=20, blank=True)
    courseTitle = models.CharField(max_length=100)
    shortDescription = models.CharField(max_length=300)
    courseProfessors = models.CharField(max_length=300)
    coursePolicies = models.CharField(max_length=300, blank=True)
    nominalCourseDifficultyReview = models.IntegerField()
    courseDemand = models.IntegerField(blank=True)
    passingRate = models.FloatField(blank=True)

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