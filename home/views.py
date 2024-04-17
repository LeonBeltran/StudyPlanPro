# Website Movement
from django.shortcuts import render, redirect
# User Authentication
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .forms import JoinForm

# Create your views here.
def view_home(request):
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
                    return redirect('/home/join')
     else:
          form = JoinForm()

     return render(request, 'joinpage.html', {
          'form': form,
     })
     
# Old registration view
# def view_join(request):
#      if request.method == "POST":
#           form = StudentForm(request.POST or None)
#           if form.is_valid():
#                form.save()
#                messages.success(request, ('Successfully made account!'))
#                return redirect('/home/')
#           else:
#                messages.success(request, ('Error found, please try again'))
#                return redirect('/home/join')
#      else:
#           return render(request, 'joinpage.html')