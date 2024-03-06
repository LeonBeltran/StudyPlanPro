from django.shortcuts import render, redirect
from django.contrib.auth import logout


def home(request):
    return render(request, 'homepage.html') # will change I think

def logout_view(request):
    logout(request)
    return redirect('/')
