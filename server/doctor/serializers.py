from rest_framework import serializers as s
from .models import Doctor, Formation

class FormationSerializer(s.ModelSerializer):
    class Meta:
        model = Formation
        fields = ['instituicao', 'curso']

class DoctorSerializer(s.ModelSerializer):
    formacoes = FormationSerializer(many=True, required=False)

    class Meta:
        model = Doctor
        fields = '__all__'
        read_only_fields = ['dataCriacao']

    def validate(self, data):
        required_fields = [
            'nome',
            'foto',
            'especialidade',
            'valor',
            'tempo',
            'visualizacoes',
            'crm',
            'cidade',
            'estado',
            'nota',
            'patologias',
            'atendimentos',
            'convenio',
            'retorno',
            'experiencia_cannabis',
            ]
        
        for field in required_fields:
            if field not in data or not data[field]:
                raise s.ValidationError({field: f'O campo {field} é obrigatório'})
        
        return data