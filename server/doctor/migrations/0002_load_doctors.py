import json
from django.db import migrations
from django.conf import settings
import os

def load_initial_doctors(apps, schema_editor):
    Doctor = apps.get_model('doctor', 'Doctor')
    fixture_file = os.path.join(settings.BASE_DIR, 'doctor', 'fixtures', 'doctors.json')
    
    with open(fixture_file, 'r') as file:
        doctors = json.load(file)
        for doctor_data in doctors:
            Doctor.objects.create(**doctor_data)

def reverse_load(apps, schema_editor):
    Doctor = apps.get_model('doctor', 'Doctor')
    Doctor.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('doctor', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_initial_doctors, reverse_load),
    ]
