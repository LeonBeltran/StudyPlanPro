from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
) # Added for allauth

# Create your models here.
class Course(models.Model):
    courseCode = models.CharField(max_length=30)
    courseTitle = models.CharField(max_length=100)
    shortDescription = models.CharField(max_length=500, blank=True)
    coursePrereq = models.ManyToManyField('self', blank=True, symmetrical=False, related_name="CoursePrereq")
    courseCoreq = models.ManyToManyField('self', blank=True, symmetrical=False, related_name="CourseCoreq")
    nominalCourseDifficultyReview = models.IntegerField(default=3, validators=[MinValueValidator(1), MaxValueValidator(5)])
    courseDemand = models.IntegerField(default=0)

    def __str__(self):
        return self.courseCode

class CourseReview(models.Model):
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    courseReview = models.CharField(max_length=500, blank=True)

# class Student(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     systemReview = models.CharField(max_length=500, blank=True)
#     passedCourses = models.ManyToManyField(Course, blank=True, related_name="PassedCourse")
#     failedCourses = models.ManyToManyField(Course, blank=True, related_name="FailedCourse")

#     def __str__(self):
#         return self.email
    
######## Added for allauth ########
class StudentManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Users must have an email address.")

        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email,password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class Student(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='email address',
        unique=True,
        db_index=True,
    )
    username = models.CharField(
        max_length=191,
        unique=True,
        default=None, 
        blank=True, 
        null=True
    )

    password = models.CharField(
        max_length=191,
        default=None, 
        blank=True, 
        null=True
    )
    
    systemReview = models.CharField(
        max_length=500,
        blank=True
    )
    passedCourses = models.ManyToManyField(
        Course,
        blank=True,
        related_name="PassedCourse"
    )
    
    failedCourses = models.ManyToManyField(
        Course,
        blank=True,
        related_name="FailedCourse"
    )

    # is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    # is_superuser= models.BooleanField(default=False)

    objects = StudentManager()

    USERNAME_FIELD = "email"

    def get_username(self):
        return self.username

    def __str__(self):
        return f"{self.email} ({self.username})"
######## Added for allauth ########