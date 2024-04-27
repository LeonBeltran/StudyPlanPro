from django.shortcuts import render

# Create your views here.
def view_flowchart(request):
     return render(request, 'flowchart2page.html')

def view_othercourses(request):
     return render(request, 'othercourses2page.html')

def view_recommendations(request):
     return render(request, 'recommendations2page.html')