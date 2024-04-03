from django.shortcuts import render, redirect
from django.contrib.auth import logout
from .forms import StudentForm
from django.contrib import messages

# Create your views here.
def view_home(request):
     return render(request, 'homepage.html')

def view_join(request):
     if request.method == "POST":
          form = StudentForm(request.POST or None)
          if form.is_valid():
               form.save()
               messages.success(request, ('Successfully made account!'))
               return redirect('/home/')
          else:
               messages.success(request, ('Error found, please try again'))
               return redirect('/home/join')
     else:
          return render(request, 'joinpage.html')

def view_logout(request):
     logout(request)
     return redirect('/home/')