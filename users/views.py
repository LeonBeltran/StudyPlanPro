from django.shortcuts import render, redirect
from django.contrib.auth import logout


def home(request):
    return render(request, 'login.html') # will change I think

def loggedin(request):
    return render(request, 'loggedin.html')

def logout_view(request):
    # logout(request)
    # return redirect('/')
    return render(request, 'loggedout.html')
