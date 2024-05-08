from django.shortcuts import render
from django.http import JsonResponse
from home.models import Course, Student

# Create your views here.
def view_flowchart(request):
     if request.method == POST:    # type: ignore
          student_id = "temp"      # request.user.id
          student = Student.objects.get(id=student_id)
          for course_id in range(10):      # selectedCourses
               course = Course.objects.get(courseCode=course_id)
               course.courseDemand -= 1
               # for course in nextCourse -> course.courseDemand += 1
               student.passedCourses.append(course_id)
     else:
          return render(request, 'flowchartpage.html')

def view_othercourses(request):
     return render(request, 'othercoursespage.html')

def view_recommendations(request):
     return render(request, 'recommendationspage.html')

def course_description(request):
     if request.method == 'GET':
          data = request.GET.get('code')
          print(data)
          course = Course.objects.get(courseCode=data)
          data = {
               "courseCode": course.courseCode,
               "courseTitle": course.courseTitle,
               "shortDescription": course.shortDescription
          }
          return JsonResponse(data)
     elif Course.DoesNotExist:
          return JsonResponse({"error": "Course does not exist"}, status=404)
     else:     
          return JsonResponse({"error": str(Exception)}, status=500)