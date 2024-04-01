from django.shortcuts import render

# Create your views here.
def view_flowchart(request):
     return render(request, 'flowchartpage.html')

def view_othercourses(request):
     return render(request, 'othercoursespage.html')