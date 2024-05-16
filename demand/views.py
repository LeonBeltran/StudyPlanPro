from django.shortcuts import render
from django.http import JsonResponse
from home.models import Course, CourseReview
from .filters import CourseFilter

# Create your views here.
def view_demand(request):
     if request.method == 'POST':
          course_review = request.POST['review_input']
          course = request.POST.get('review_course')
          course = Course.objects.get(courseCode=course)
          new_review = CourseReview(course=course, courseReview=course_review)
          new_review.save()

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
          reviews = []
          for prereq in course.coursePrereq.all():
               prereqs.append(prereq.courseCode)
          for coreq in course.courseCoreq.all():
               coreqs.append(coreq.courseCode)
          for courses in Course.objects.all():
               for courses_prereq in courses.coursePrereq.all():
                    if course == courses_prereq:
                         neededfor.append(courses.courseCode)
          for review in CourseReview.objects.all():
               if course == review.course:
                    reviews.append(review.courseReview)
          data = {
               "courseCode": course.courseCode,
               "courseTitle": course.courseTitle,
               "shortDescription": course.shortDescription,
               "coursePrereq": prereqs,
               "courseCoreq": coreqs,
               "neededFor": neededfor,
               "courseReview": reviews
          }
          print(data)
          return JsonResponse(data)
     elif Course.DoesNotExist:
          return JsonResponse({"error": "Course does not exist"}, status=404)
     else:     
          return JsonResponse({"error": str(Exception)}, status=500)