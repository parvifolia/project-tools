from django.shortcuts import render, get_object_or_404, redirect

def page404(request, exception=None):
    return render (request, "index.html", status=404)

def home_view(request):
    return render (request, "home.html", {})

def todo_view(request):
    return render (request, "todo.html", {})

def chat_view(request):
    return render (request, "chat.html", {})

def weather_view(request):
    return render (request, "weather.html", {})
