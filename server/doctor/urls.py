from django.urls import path, include
from rest_framework import routers as r
from .views import DoctorViewSet

r = r.DefaultRouter()
r.register(r'doctor', DoctorViewSet)

urlpatterns = [
    path('', include(r.urls)),
]