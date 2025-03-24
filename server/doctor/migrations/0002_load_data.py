import json
from django.db import migrations
from django.conf import settings
import os

def load_initial_data(apps, schema_editor):
    Doctor = apps.get_model('doctor', 'Doctor')
    Formation = apps.get_model('doctor', 'Formation')
    
    doctors_file = os.path.join(settings.BASE_DIR, 'doctor', 'fixtures', 'doctors.json')
    formations_file = os.path.join(settings.BASE_DIR, 'doctor', 'fixtures', 'formations.json')
    
    try:
        with open(doctors_file, 'r') as file:
            doctors_data = json.load(file)
            for doctor_data in doctors_data:
                Doctor.objects.create(**doctor_data)
    except FileNotFoundError:
        print(f"Warning: Doctors fixture file not found at {doctors_file}")

    try:
        with open(formations_file, 'r') as file:
            formations_data = json.load(file)
            for item in formations_data:
                doctor = Doctor.objects.get(id=item['doctor_id'])
                for formation in item['formations']:
                    Formation.objects.create(
                        doctor=doctor,
                        instituicao=formation['instituicao'],
                        curso=formation['curso']
                    )
    except FileNotFoundError:
        print(f"Warning: Formations fixture file not found at {formations_file}")

def reverse_load(apps, schema_editor):
    Formation = apps.get_model('doctor', 'Formation')
    Doctor = apps.get_model('doctor', 'Doctor')
    
    Formation.objects.all().delete()
    Doctor.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('doctor', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(load_initial_data, reverse_load),
    ]