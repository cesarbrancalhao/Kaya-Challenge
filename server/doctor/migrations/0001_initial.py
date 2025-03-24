# Generated by Django 5.1.6 on 2025-03-21 21:37

import django.contrib.postgres.fields
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foto', models.URLField(max_length=2000)),
                ('nome', models.CharField(max_length=100)),
                ('especialidade', models.CharField(choices=[('FI', 'Medicina Funcional Integrativa'), ('MI', 'Medicina Integrativa'), ('PC', 'Pós Graduação em Psiquiatria / Medicina Canabinóide'), ('GE', 'Generalista | Medicina Endocanabinóide'), ('MT', 'Medicina do Trabalho'), ('DT', 'Dentista'), ('CG', 'Clínico Geral'), ('PS', 'Medicina Preventiva e Social'), ('PS2', 'Medicina Preventiva e Social - RQE Nº: 39217'), ('FC', 'Medicina de Família e Comunidade'), ('FC1', 'Medicina de Família e Comunidade - RQE Nº: 6198'), ('FC2', 'Medicina de Família e Comunidade - RQE Nº: 21312')], max_length=3)),
                ('valor', models.FloatField()),
                ('tempo', models.IntegerField()),
                ('crm', models.CharField(max_length=20)),
                ('cidade', models.CharField(max_length=100)),
                ('estado', models.CharField(max_length=2)),
                ('nota', models.FloatField()),
                ('instagram', models.URLField(max_length=2000)),
                ('facebook', models.URLField(max_length=2000)),
                ('descricao', models.TextField()),
                ('patologias', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), blank=True, default=list, size=None)),
                ('atendimentos', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), blank=True, default=list, size=None)),
                ('convenio', models.BooleanField()),
                ('retorno', models.IntegerField()),
                ('experiencia_cannabis', models.TextField()),
                ('dataCriacao', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Formation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instituicao', models.CharField(max_length=200)),
                ('curso', models.CharField(max_length=200)),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='formacoes', to='doctor.doctor')),
            ],
        ),
    ]
