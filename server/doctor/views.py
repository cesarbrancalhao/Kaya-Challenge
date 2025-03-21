from rest_framework import viewsets as v
from rest_framework import status as stts
from rest_framework.response import Response as res
from .models import Doctor
from .serializers import DoctorSerializer
from .services import DoctorService

class DoctorViewSet(v.ModelViewSet):
    queryset = Doctor.objects.all()
    srl = DoctorSerializer
    svc = DoctorService

    def list(self, request):
        try:
            doctors = self.svc.get_all()
            serializer = self.srl(doctors, many=True)
            return res(serializer.data, status=stts.HTTP_200_OK)
        except Exception as e:
            return res({'erro': str(e)}, status=stts.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            doctor = self.svc.get_by_id(pk)
            serializer = self.srl(doctor)
            return res(serializer.data, status=stts.HTTP_200_OK)
        except Exception as e:
            return res({'erro': str(e)}, status=stts.HTTP_400_BAD_REQUEST)