from django.contrib import admin
from .models import Course
from .models import CourseReview
from .models import StudentPassedCourse
from .models import StudentFailedCourse
from .models import Student

# Register your models here.
admin.site.register(Course)
admin.site.register(CourseReview)
admin.site.register(StudentPassedCourse)
admin.site.register(StudentFailedCourse)
admin.site.register(Student)