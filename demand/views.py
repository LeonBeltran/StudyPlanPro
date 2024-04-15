from django.shortcuts import render
from home.models import Course

# Create your views here.
def view_demand(request):
     course_list = Course.objects.all().filter(courseCode__startswith = "CS")           # FOR DATABASE FUNCTIONALITY
     return render(request, 'demandpage.html', {'all_courses': course_list})