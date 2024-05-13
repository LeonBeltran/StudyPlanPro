from django.shortcuts import render, redirect
from django.http import JsonResponse
from home.models import Course, Student
from django.contrib import messages
from django.db.models import Q

# Create your views here.
def view_flowchart(request):
     if request.method == 'POST':    # type: ignore
          if request.user.is_authenticated:
               selected_courses = request.POST.getlist('courses')\
               
               student_id = request.user.email
               student = Student.objects.get(email=student_id)
               
               # Get list of courses in CS program
               cs_courses = Course.objects.filter(
                    Q(courseCode__startswith='CS') |   # CS courses
                    Q(courseCode='KAS 1') |             # Specific courses
                    Q(courseCode='PHILO 1') |
                    Q(courseCode='SOCSCI 1/2') |
                    Q(courseCode='ENG 13') |
                    Q(courseCode='SPEECH 30') |
                    Q(courseCode='FIL 40') |
                    Q(courseCode='ENG 30') |
                    Q(courseCode='STS 1/DRMAPS') |
                    Q(courseCode='ARTS 1') |
                    Q(courseCode='MATH 21') |
                    Q(courseCode='MATH 22') |
                    Q(courseCode='MATH 23') |
                    Q(courseCode='MATH 40') |
                    Q(courseCode='PHYSICS 71') |
                    Q(courseCode='PHYSICS 72') |
                    Q(courseCode__startswith='PE') |
                    Q(courseCode='NSTP 1') |
                    Q(courseCode='NSTP 2') |
                    Q(courseCode='GE ELECTIVE') |
                    Q(courseCode='FREE ELECTIVE') |
                    Q(courseCode='PI 100')
               )
               
               # Remove courses in student passed courses that were not selected in the new submission
               for removed in student.passedCourses.all():
                    if removed.courseCode not in selected_courses:
                         for course in cs_courses:
                              if removed in course.coursePrereq.all():
                                   if course.courseDemand > 0:
                                        course.courseDemand -= 1
                                        course.save()
                                   if course in student.takeableCourses.all():
                                        student.takeableCourses.remove(course)
                         student.passedCourses.remove(removed)
                         
                         if not removed.coursePrereq.exists():
                              removed.courseDemand += 1
                              removed.save()
                    
               # Add every new course the student selected
               for course_id in selected_courses:
                    course = Course.objects.get(courseCode=course_id)
                    if course in student.passedCourses.all():
                         continue
                    else:
                         if course.courseDemand > 0:
                              course.courseDemand -= 1
                              course.save()
                         student.passedCourses.add(course)
                    
               # Check for the new courses a student can take
               for course in cs_courses:
                    if course in student.passedCourses.all() or course in student.takeableCourses.all():
                         continue
                    else:
                         takeable = True
                         for prereq in course.coursePrereq.all():
                              if prereq in student.passedCourses.all():
                                   continue
                              else:
                                   takeable = False
                         
                         if takeable == True:
                              course.courseDemand += 1
                              course.save()
                              
                              student.takeableCourses.add(course)
                         else:
                              if course in student.takeableCourses.all():
                                   if course.courseDemand > 0:
                                        course.courseDemand -= 1
                                        course.save()
                                   
                                   student.takeableCourses.remove(course)
               
               return redirect('recommendations')
          else:
               messages.success(request, "Please Log-in!")
               return redirect("/home")
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