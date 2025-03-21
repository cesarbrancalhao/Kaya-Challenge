# Kaya Challenge

A Django + Tailwind CSS implementation of KayaDoc's doctors listing and profile pages.

## Backend Setup

1. Create and activate virtual environment:
```bash
# Linux/MacOS:
make venv
source venv/bin/activate

# Windows:
python -m venv venv
.\venv\Scripts\activate
```

2. Install dependencies:
```bash
make install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```bash
DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
SECRET_KEY=your-secret-key
DB_NAME=your-db-name
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432
```

4. Apply database migrations and run the development server:
```bash
cd server
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```