from rest_framework import viewsets as v
# from rest_framework import status as stts
from rest_framework.response import Response as res
from .models import Doctor
from .serializers import DoctorSerializer as srl
from .services import DoctorService as svc

class DoctorViewSet(v.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = srl
    service = svc

    def list(self, request):
        doctors = self.service.get_all()
        serializer = self.serializer_class(doctors, many=True)
        return res(serializer.data)

    def retrieve(self, request, pk=None):
        doctor = self.service.get_by_id(pk)
        serializer = self.serializer_class(doctor)
        return res(serializer.data)