from django.urls import path
from . import views

urlpatterns = [
    path('blog/login/', views.login_view, name='login'),
    path('blog/register/', views.register_view, name='register'),
    path('blog/logout/', views.logout_view, name='logout'),

]
