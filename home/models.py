from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 

# Create your models here.
class Course(models.Model):
    courseCode = models.CharField(max_length=30)
    courseTitle = models.CharField(max_length=100)
    shortDescription = models.CharField(max_length=500, blank=True)
    coursePrereq = models.ManyToManyField('self', blank=True)
    courseCoreq = models.ManyToManyField('self', blank=True)
    nominalCourseDifficultyReview = models.IntegerField(default=3, validators=[MinValueValidator(1), MaxValueValidator(5)])
    courseDemand = models.IntegerField(default=0)

    def __str__(self):
        return self.courseCode

class CourseReview(models.Model):
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    courseReview = models.CharField(max_length=500, blank=True)

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    systemReview = models.CharField(max_length=500, blank=True)
    passedCourses = models.ManyToManyField(Course, blank=True, related_name="PassedCourse")
    failedCourses = models.ManyToManyField(Course, blank=True, related_name="FailedCourse")

    def __str__(self):
        return self.email