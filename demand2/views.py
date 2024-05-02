from django.shortcuts import render
# from home.models import Course
# from .filters import CourseFilter

# Create your views here.
def view_demand(request):
     return render(request, 'demand2page.html')

### FROM ORIGINAL DEMAND TABLE ###
# def view_demand(request):
#      course_list = Course.objects.filter(courseCode__startswith = "CS")           # FOR DATABASE FUNCTIONALITY
#      searched_course = CourseFilter(request.GET, queryset=course_list)
#      course_list = searched_course.qs
#      context = {
#           'course_list': course_list,
#           'searched_course': searched_course
#      }
#      return render(request, 'demandpage.html', context)
### ### ###