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
DB_NAME=kaya
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
```

3.5 Create a docker Postgres container if you don't have a database set up:
```bash
make up
```

4. Apply database migrations and run the development server:
```bash
make migration
make run
```