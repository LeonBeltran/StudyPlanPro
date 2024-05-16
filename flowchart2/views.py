from django.shortcuts import render, redirect
from django.http import JsonResponse
from home.models import Course, Student
from django.contrib import messages
from django.db.models import Q

# Create your views here.
def view_flowchart(request):
     if request.method == 'POST':    # type: ignore
          if request.user.is_authenticated:
               selected_courses = request.POST.getlist('courses')
               
               student_id = request.user.email
               student = Student.objects.get(email=student_id)
               
               # Get list of courses in CE program
               ce_courses = Course.objects.filter(
                    Q(courseCode__startswith='EEE') |   # EEE courses
                    Q(courseCode__startswith='COE') |   # COE courses
                    Q(courseCode='KAS 1') |             # Specific courses
                    Q(courseCode='PHILO 1') |
                    Q(courseCode='SOC SCI 2') |
                    Q(courseCode='ES 101') |
                    Q(courseCode='SPEECH 30') |
                    Q(courseCode='FIL 40') |
                    Q(courseCode='DRMAPS') |
                    Q(courseCode='ARTS 1') |
                    Q(courseCode='MATH 21') |
                    Q(courseCode='MATH 22') |
                    Q(courseCode='MATH 23') |
                    Q(courseCode='MATH 40') |
                    Q(courseCode='PHYSICS 71') |
                    Q(courseCode='PHYSICS 72') |
                    Q(courseCode='PHYSICS 73') |
                    Q(courseCode__startswith='PE') |
                    Q(courseCode='NSTP 1') |
                    Q(courseCode='NSTP 2') |
                    Q(courseCode='GE ELECTIVE') |
                    Q(courseCode='GE ELECTIVE 2') |
                    Q(courseCode='ENGG ELECTIVE') |
                    Q(courseCode='FREE ELECTIVE') |
                    Q(courseCode='PI 100')
               )
               
               # Clear out CS courses from student database
               for course in student.takeableCourses.all():
                    if course not in ce_courses:
                         student.takeableCourses.remove(course)
                         if course.courseDemand > 0:
                              course.courseDemand -= 1
                              course.save()
               for course in student.passedCourses.all():
                    if course not in ce_courses:
                         student.takeableCourses.remove(course)
               
               # Remove courses in student passed courses that were not selected in the new submission
               for removed in student.passedCourses.all():
                    if removed.courseCode not in selected_courses:
                         for course in ce_courses:
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
                         if course in student.takeableCourses.all():
                              student.takeableCourses.remove(course)
                    else:
                         if course.courseDemand > 0:
                              course.courseDemand -= 1
                              course.save()
                         student.passedCourses.add(course)
                         if course in student.takeableCourses.all():
                              student.takeableCourses.remove(course)
                    
               # Check for the new courses a student can take
               for course in ce_courses:
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
               
               return redirect('recommendations2')
          else:
               messages.success(request, "Please Log-in!")
               return redirect("/home")
     else:
          return render(request, 'flowchart2page.html')

def view_othercourses(request):
     return render(request, 'othercourses2page.html')

def view_recommendations(request):
     if request.user.is_authenticated:
          student_id = request.user.email
          student = Student.objects.get(email=student_id)
          
          # Get takeable courses
          majors = student.takeableCourses.filter(Q(courseCode__startswith='EEE') | Q(courseCode__startswith='COE'))

          pes = len(student.takeableCourses.filter(courseCode__startswith='PE'))
          nstps = student.takeableCourses.filter(courseCode__startswith='NSTP')
          others = student.takeableCourses.exclude(courseCode__startswith='EEE').exclude(courseCode__startswith='COE').exclude(courseCode__startswith='PE').exclude(courseCode__startswith='NSTP')
          
          def chunk(queryset, chunk_size):
               return [queryset[i:i + chunk_size] for i in range(0, len(queryset), chunk_size)]
          major_chunks = chunk(majors, 6)
          other_chunks = chunk(others, 6)
               
          
          context = {
               'stud_id': student_id,
               'majors': major_chunks,
               'pes': pes,
               'nstps': nstps,
               'others': other_chunks,
          }
          return render(request, 'recommendations2page.html', context)
     else:
          messages.success(request, "Please Log-in!")
          return redirect("/home")