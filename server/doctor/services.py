from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Doctor

class DoctorService:
    @staticmethod
    def get_all(params=None):
        queryset = Doctor.objects.all()
        
        if not params:
            return queryset
            
        if search := params.get('search'):
            queryset = queryset.filter(nome__icontains=search)
            
        if especialidade := params.get('especialidade'):
            queryset = queryset.filter(especialidade=especialidade)
            
        if order_by := params.get('order_by'):
            if order_by == 'valor_asc':
                queryset = queryset.order_by('valor')
            elif order_by == 'valor_desc':
                queryset = queryset.order_by('-valor')
            elif order_by == 'visualizacoes':
                queryset = queryset.order_by('-visualizacoes')

        return queryset

    @staticmethod
    def get_by_id(id):
        return get_object_or_404(Doctor, id=id)