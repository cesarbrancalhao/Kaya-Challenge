from rest_framework import viewsets as v
from rest_framework import status as stts, response as r
from .models import Doctor
from .serializers import DoctorSerializer as srl
from .services import DoctorService as svc

class DoctorViewSet(v.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = srl