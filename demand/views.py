from django.shortcuts import render
from django.http import JsonResponse
from home.models import Course
from .filters import CourseFilter

# Create your views here.
def view_demand(request):
     course_list = Course.objects.filter(courseCode__startswith = "CS")           # FOR DATABASE FUNCTIONALITY
     searched_course = CourseFilter(request.GET, queryset=course_list)
     course_list = searched_course.qs
     context = {
          'course_list': course_list,
          'searched_course': searched_course
     }
     return render(request, 'demandpage.html', context)

def course_description(request):
     if request.method == 'GET':
          data = request.GET.get('code')
          course = Course.objects.get(courseCode=data)
          prereqs = []
          coreqs = []
          neededfor = []
          for prereq in course.coursePrereq.all():
               prereqs.append(prereq.courseCode)
          for coreq in course.courseCoreq.all():
               coreqs.append(coreq.courseCode)
          for courses in Course.objects.all():
               for courses_prereq in courses.coursePrereq.all():
                    if course == courses_prereq:
                         neededfor.append(courses.courseCode)
          data = {
               "courseCode": course.courseCode,
               "courseTitle": course.courseTitle,
               "shortDescription": course.shortDescription,
               "coursePrereq": prereqs,
               "courseCoreq": coreqs,
               "neededFor": neededfor
          }
          print(data)
          return JsonResponse(data)
     elif Course.DoesNotExist:
          return JsonResponse({"error": "Course does not exist"}, status=404)
     else:     
          return JsonResponse({"error": str(Exception)}, status=500)
