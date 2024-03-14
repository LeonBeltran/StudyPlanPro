from django.shortcuts import render, redirect
from django.contrib.auth import logout

# Create your views here.
def view_home(request):
     return render(request, 'homepage.html')

def view_logout(request):
     logout(request)
     return redirect('/home/')