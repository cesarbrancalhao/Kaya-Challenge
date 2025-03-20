from django.shortcuts import get_object_or_404
from .models import Doctor

class DoctorService:
    # Não há validações de formulário pois o projeto tem apenas GETs.
    
    @staticmethod
    def get_all():
        return Doctor.objects.all()

    @staticmethod
    def get_by_id(id):
        return get_object_or_404(Doctor, id=id)