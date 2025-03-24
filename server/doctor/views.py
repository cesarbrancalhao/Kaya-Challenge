from rest_framework import viewsets as v
from rest_framework import status as stts
from rest_framework.response import Response as res
from rest_framework.pagination import PageNumberPagination
from .models import Doctor
from .serializers import DoctorSerializer
from .services import DoctorService

class DoctorPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class DoctorViewSet(v.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    svc = DoctorService
    pagination_class = DoctorPagination

    def list(self, request):
        try:
            params = {
                'search': request.query_params.get('search'),
                'especialidade': request.query_params.get('especialidade'),
                'order_by': request.query_params.get('order_by')
            }
            
            doctors = self.svc.get_all(params)
            
            page = self.paginate_queryset(doctors)
            if page is not None:
                serializer = self.serializer_class(page, many=True)
                return self.get_paginated_response(serializer.data)
            
            serializer = self.serializer_class(doctors, many=True)
            return res(serializer.data, status=stts.HTTP_200_OK)
        except Exception as e:
            return res({'erro': str(e)}, status=stts.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            doctor = self.svc.get_by_id(pk)
            serializer = self.serializer_class(doctor)
            return res(serializer.data, status=stts.HTTP_200_OK)
        except Exception as e:
            return res({'erro': str(e)}, status=stts.HTTP_400_BAD_REQUEST)