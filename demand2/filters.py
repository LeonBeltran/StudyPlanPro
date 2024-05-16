import django_filters

from home.models import *

class CourseFilter(django_filters.FilterSet):
    class Meta:
        model = Course
        fields = {
            'courseCode': ['icontains']
        }