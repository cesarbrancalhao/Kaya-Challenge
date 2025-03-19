from .models import Doctor

class DoctorService:
    @staticmethod
    def create(data):
        doctor = Doctor.objects.create(**data)
        return doctor
        
    @staticmethod
    def update(data, id):
        doctor = Doctor.objects.get(id=id)
        doctor.nome = data['nome']
        doctor.imagem = data['imagem']
        doctor.save()
        return doctor