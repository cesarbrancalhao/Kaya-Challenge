venv:
	python3 -m venv venv

install:
	pip install -r requirements.txt

up:
	docker compose up -d

migration:
	python server/manage.py migrate

run:
	python server/manage.py runserver