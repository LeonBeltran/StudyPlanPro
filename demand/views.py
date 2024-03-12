from django.shortcuts import render

# Create your views here.
def view_demand(request):
     return render(request, 'demandpage.html')