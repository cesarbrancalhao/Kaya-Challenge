from django.db import models
from django.contrib.postgres.fields import ArrayField

ESPECIALIDADES = [
    ('FI', 'Medicina Funcional Integrativa'),
    ('MI', 'Medicina Integrativa'),
    ('PC', 'Pós Graduação em Psiquiatria / Medicina Canabinóide'),
    ('GE', 'Generalista | Medicina Endocanabinóide'),
    ('MT', 'Medicina do Trabalho'),
    ('DT', 'Dentista'),
    ('CG', 'Clínico Geral'),
    ('PS', 'Medicina Preventiva e Social'),
    ('PS2', 'Medicina Preventiva e Social - RQE Nº: 39217'),
    ('FC', 'Medicina de Família e Comunidade'),
    ('FC1', 'Medicina de Família e Comunidade - RQE Nº: 6198'),
    ('FC2', 'Medicina de Família e Comunidade - RQE Nº: 21312'),
]

class Doctor(models.Model):
    foto = models.URLField(max_length=2000)
    nome = models.CharField(max_length=100)
    especialidade = models.CharField(max_length=3, choices=ESPECIALIDADES)
    valor = models.FloatField()
    tempo = models.IntegerField()
    visualizacoes = models.IntegerField()
    crm = models.CharField(max_length=20)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2)
    nota = models.FloatField()
    instagram = models.URLField(max_length=2000)
    facebook = models.URLField(max_length=2000)
    descricao = models.TextField()
    patologias = ArrayField(models.CharField(max_length=100), blank=True, default=list)
    atendimentos = ArrayField(models.CharField(max_length=100), blank=True, default=list)
    convenio = models.BooleanField()
    retorno = models.IntegerField()
    experiencia_cannabis = models.TextField()
    dataCriacao = models.DateTimeField(auto_now_add=True)

    @property
    def especialidade_display(self):
        return dict(ESPECIALIDADES).get(self.especialidade, self.especialidade)

    class Meta:
        db_table = 'doctor_doctor'
        managed = True

    def __str__(self):
        return self.nome

class Formation(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='formacoes')
    instituicao = models.CharField(max_length=200)
    curso = models.CharField(max_length=200)

    class Meta:
        db_table = 'doctor_formation'
        managed = True

    def __str__(self):
        return f"{self.instituicao}\n{self.curso}"