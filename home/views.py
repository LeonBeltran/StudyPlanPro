from django.shortcuts import render, redirect
from django.contrib.auth import logout
from .forms import StudentForm

# Create your views here.
def view_home(request):
     return render(request, 'homepage.html')

def view_join(request):
     if request.method == "POST":
          form = StudentForm(request.POST or None)
          if form.is_valid():
               form.save()
          return redirect('/home/')
     else:
          return render(request, 'joinpage.html')

def view_logout(request):
     logout(request)
     return redirect('/home/')