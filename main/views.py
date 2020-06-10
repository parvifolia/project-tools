from django.shortcuts import render, get_object_or_404, redirect

def page404(request, exception=None):
    return render (request, "index.html", status=404)

def home_view(request):
    return render (request, "index.html", {})
