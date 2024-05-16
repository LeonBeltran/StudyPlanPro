# Website Movement
from django.shortcuts import render, redirect
# User Authentication
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .forms import JoinForm
# Database Linking
from .models import Student

# Create your views here.
def view_home(request):
     # Add user to Student database if they are not in it yet
     if request.user.is_authenticated:
          student_id = request.user.email
          if not Student.objects.filter(email=student_id).exists():
               Student.objects.create(email=student_id, name=request.user.username)
     return render(request, 'homepage.html')

def view_login(request):
     if request.method == "POST":
          email = request.POST["email"]
          username = request.POST["username"]
          password = request.POST["password"]
          
          if "@up.edu.ph" in email:
               user = authenticate(request, username=username, email=email, password=password)
          else:
               messages.success(request, 'Please use an email address from UP.')
               return redirect('/home/login')
               
          if user is not None:
               login(request, user)
               messages.success(request, 'Logged in as ' + username)
               return redirect('/home/')
          else:
               messages.success(request, ('Invalid Credentials, Please Try Again!'))
               return redirect('/home/login')
     else:
          return render(request, 'loginpage.html')

def view_logout(request):
     logout(request)
     messages.success(request, ('You have logged out.'))
     return redirect('/home/')

def view_join(request):
     if request.method == "POST":
          form = JoinForm(request.POST)
          if form.is_valid():
               username = form.cleaned_data['username']
               password = form.cleaned_data['password1']
               email = form.cleaned_data['email']
               
               if "@up.edu.ph" in email:
                    form.save()
                    user = authenticate(request, username=username, password=password)
                    login(request, user)
                    messages.success(request, "Welcome " + username + "!")
                    return redirect('/home/')
               else:
                    messages.success(request, "Please use an email address from UP.")
                    return render(request, 'joinpage.html', {
                         'form': form,
                    })
     else:
          form = JoinForm()

     return render(request, 'joinpage.html', {
          'form': form,
     })