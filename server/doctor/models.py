from django.db import models as m
from django.contrib.postgres.fields import ArrayField

ESPECIALIDADE = [
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

class Formation(m.Model):
    instituicao = m.CharField(max_length=200)
    curso = m.CharField(max_length=200)
    doctor = m.ForeignKey('Doctor', on_delete=m.CASCADE, related_name='formacoes')

    def __str__(self):
        return f"{self.instituicao}\n{self.curso}"

class Doctor(m.Model):
    # card
    foto = m.URLField(max_length=2000)
    nome = m.CharField(max_length=100)
    especialidade = m.CharField(max_length=3, choices=ESPECIALIDADE)
    valor = m.FloatField()
    tempo = m.IntegerField() # da consulta, minutos

    # header
    visualizacoes = m.IntegerField()
    crm = m.CharField(max_length=20)
    cidade = m.CharField(max_length=100)
    estado = m.CharField(max_length=2)
    nota = m.FloatField() # média das avaliações, 0 a 5
    instagram = m.URLField(max_length=2000)
    facebook = m.URLField(max_length=2000)

    # dados
    descricao = m.TextField()
    patologias = ArrayField(
        base_field=m.CharField(max_length=100),
        blank=True,
        default=list
    )
    atendimentos = ArrayField(
        base_field=m.CharField(max_length=100),
        blank=True,
        default=list
    )
    convenio = m.BooleanField()
    retorno = m.IntegerField()
    experiencia_cannabis = m.TextField()

    # system
    dataCriacao = m.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome