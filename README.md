# Kaya Challenge

A Django + Next.js + TailwindCSS challenge for KayaDoc.

## Table of Contents

1. [Features](#features)
2. [Architecture](#architecture)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Quick Start](#quick-start)
6. [API Endpoints](#api-endpoints)
7. [Make Commands](#make-commands)
8. [Technologies](#technologies)

## Features

- Doctor listing with filtering and search capabilities
- Detailed doctor profiles
- Order by price and views
- Specialty-based filtering
- Responsive design
- Pagination support
- Real-time search
- Profile view tracking

## Architecture

```
┌─────────────┐         ┌──────────┐
│   Next.js   │ ──────► │  Django  │
│  Frontend   │         │  Backend │
└─────────────┘         └──────────┘
                             │
                             ▼
                       ┌──────────┐
                       │PostgreSQL│
                       └──────────┘
```

## Project Structure

```
kaya-challenge/
├── client/           # Next.js
│   ├── app/         
│   ├── components/   
│   └── services/    
├── server/           # Django
│   ├── core/        
│   ├── doctor/      
│   └── manage.py    
├── docker/
└── Makefile         
```

## Prerequisites

- Python 3.8+
- Node.js 18+
- Docker and Docker Compose (optional)
- PostgreSQL
- Make (optional)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kaya-challenge.git
cd kaya-challenge
```

2. Backend Setup:
```bash
# Linux/MacOS:
make venv
source venv/bin/activate

# Windows:
make venvw
.\venv\Scripts\activate
```

Then install dependencies:
```bash
make install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```bash
DEBUG=True
DB_NAME=kaya
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
```

4. Start PostgreSQL (if using Docker):
```bash
make up
```

5. Initialize the backend:
```bash
make migration
make run
```

6. Frontend Setup:
```bash
# Open a new terminal
cd client
npm install
npm run dev
```

## API Endpoints

### List Doctors
```bash
GET /
Query Parameters:
- search: Search by name
- especialidade: Filter by specialty
- order_by: [valor_asc, valor_desc, visualizacoes]
```

### Get Doctor Details
```bash
GET /{id}/perfil
```

## Make Commands

- `make venv`: Create Python virtual environment
- `make install`: Install Python dependencies
- `make up`: Start PostgreSQL container
- `make down`: Stop PostgreSQL container
- `make migration`: Run database migrations
- `make makemigrations`: Create new database migrations
- `make run`: Start Django development server
- `make shell`: Start Django interactive shell
- `make superuser`: Create Django superuser
- `make requirements`: Update requirements.txt with current dependencies
- `make test`: Run Django tests
- `make clean`: Remove Python cache files

## Technologies

### Frontend
- Next.js 15
- React 19
- Tailwind CSS
- TypeScript
- React Icons

### Backend
- Django 5.1
- Django REST Framework
- PostgreSQL
- Python 3.8+

### Tools
- Docker
- Make
- Git

### Dependencies
Frontend:
- next: 15.2.3
- react: ^19.0.0
- react-dom: ^19.0.0
- react-icons: ^5.5.0
- tailwindcss: ^4
- typescript: ^5

Backend:
- django
- djangorestframework
- psycopg2-binary
- python-dotenv