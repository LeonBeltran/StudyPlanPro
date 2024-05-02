import django_filters
from django_filters import CharFilter

from home.models import *

class CourseFilter(django_filters.FilterSet):
    class Meta:
        model = Course
        courseCode = CharFilter(field_name='courseCode', lookup_expr='icontains')
        fields = '__all__'
        exclude = ['courseTitle', 'shortDescription', 'coursePrereq', 'courseCoreq', 'nominalCourseDifficultyReview', 'courseDemand']