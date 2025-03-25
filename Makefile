venv:
	python3 -m venv venv

venvw:
	python -m venv venv

install:
	pip install -r requirements.txt

up:
	docker compose up -d

down:
	docker compose down

migration:
	python server/manage.py migrate

makemigrations:
	python server/manage.py makemigrations

run:
	python server/manage.py runserver

shell:
	python server/manage.py shell

superuser:
	python server/manage.py createsuperuser

requirements:
	pip freeze > requirements.txt

test:
	python server/manage.py test

clean:
	find . -type d -name "__pycache__" -exec rm -r {} +
	find . -type f -name "*.pyc" -delete