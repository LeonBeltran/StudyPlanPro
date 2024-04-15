# Website Movement
from django.shortcuts import render, redirect
# User Authentication
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .forms import StudentForm

# Create your views here.
def view_home(request):
     return render(request, 'homepage.html')

def view_join2(request):
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

def view_login(request):
     if request.method == "POST":
          username = request.POST["username"]
          password = request.POST["password"]
          user = authenticate(request, username=username, password=password)
          if user is not None:
               login(request, user)
               messages.success(request, 'Logged in as ' + username)
               return redirect('/home/')
          else:
               messages.success(request, ('Error found, please try again'))
               return redirect('/home/login')
     else:
          return render(request, 'loginpage.html')

def view_logout(request):
     logout(request)
     messages.success(request, ('You have logged out.'))
     return redirect('/home/')

def view_join(request):
     return render(request, 'joinpage.html')