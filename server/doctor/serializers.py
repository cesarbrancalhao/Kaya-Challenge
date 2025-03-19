from rest_framework import serializers as s
from .models import Doctor

class DoctorSerializer(s.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'
        read_only_fields = ['dataCriacao']

    def validate(self, data):
        required_fields = ['nome', 'imagem']
        
        for field in required_fields:
            if not data.get(field) or str(data.get(field)).strip() == '':
                raise s.ValidationError({field: f'O campo {field} não pode estar vazio'})
        
        return data