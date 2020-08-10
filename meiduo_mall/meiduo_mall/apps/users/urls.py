from django.urls import path, re_path
from . import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    re_path(r'^username/(?P<username>[a-zA-Z0-9_-]{3,15})/count/$', views.UsernameCountView.as_view())

]
