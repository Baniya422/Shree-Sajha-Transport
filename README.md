# Shree Sajha Transport

Clean full-stack project foundation for Shree Sajha Transport, a Nepal-based goods transport and logistics company.

This repository is intentionally set up as architecture first. The frontend has clean React/Tailwind placeholders for UI work, and the backend has Laravel REST API structure, MySQL configuration, Sanctum authentication setup, migrations, seeders, services, and starter API responses.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Laravel 12, REST API
- Database: MySQL
- Authentication: Laravel Sanctum
- Version control: Git and GitHub

## Folder Structure

```text
Shree-Sajha-Transport/
├── frontend/              React Vite Tailwind application
├── backend/               Laravel REST API application
├── README.md
├── .gitignore
└── DEPLOYMENT_NOTES.md
```

## Frontend Setup

```powershell
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend environment:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

Frontend build check:

```powershell
cd frontend
npm run build
```

## Backend Setup

This project was generated with Laravel 12 because the local machine is running PHP 8.2.12. Laravel 13 requires PHP 8.3 or newer.

Create a MySQL database named:

```text
shree_sajha_transport
```

For XAMPP:

- Start Apache and MySQL.
- Open phpMyAdmin.
- Create database named `shree_sajha_transport`.

Then run:

```powershell
cd backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```

Backend environment:

```env
APP_NAME="Shree Sajha Transport"
APP_URL=http://127.0.0.1:8000
FRONTEND_URL=http://localhost:5173

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shree_sajha_transport
DB_USERNAME=root
DB_PASSWORD=
```

## API Health Check

```http
GET http://127.0.0.1:8000/api/health
```

Expected response:

```json
{
  "status": "ok",
  "message": "Shree Sajha Transport API is running"
}
```

## API Endpoints

Public:

- `GET /api/health`
- `POST /api/auth/login`
- `POST /api/bookings`
- `POST /api/contacts`
- `POST /api/estimates`
- `GET /api/tracking/{trackingId}`
- `GET /api/branches`

Protected with Sanctum:

- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/admin/dashboard`
- `GET /api/admin/bookings`
- `GET /api/admin/bookings/{id}`
- `PATCH /api/admin/bookings/{id}`
- `DELETE /api/admin/bookings/{id}`
- `GET /api/admin/contacts`
- `PATCH /api/admin/contacts/{id}`
- `DELETE /api/admin/contacts/{id}`
- `GET /api/admin/estimates`
- `PATCH /api/admin/estimates/{id}`
- `DELETE /api/admin/estimates/{id}`
- `GET /api/admin/tracking`
- `POST /api/admin/tracking`
- `PATCH /api/admin/tracking/{id}`
- `DELETE /api/admin/tracking/{id}`
- `GET /api/admin/branches`
- `POST /api/admin/branches`
- `PATCH /api/admin/branches/{id}`
- `DELETE /api/admin/branches/{id}`

## Default Development Admin

- Email: `admin@shreesajha.com`
- Password: `Admin@12345`
- Role: `super_admin`

Change this password before production.

## Team Workflow

Frontend teammate:

- Work only inside `frontend/`.
- Use Tailwind CSS utility classes for UI styling.
- Do not edit Laravel files unless backend work is assigned.

```powershell
git checkout -b frontend-ui
cd frontend
npm install
copy .env.example .env
npm run dev
```

Backend developer:

- Work only inside `backend/`.
- Keep API, migrations, seeders, services, and backend logic inside Laravel.

```powershell
git checkout -b backend-api
cd backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```

## Git Branch Workflow

- `main` should stay stable.
- Frontend UI work goes on `frontend-ui`.
- Backend API work goes on `backend-api`.
- Push feature branches and create pull requests later.
- Do not directly push broken code to `main`.

## Clone And Run Frontend

```powershell
git clone https://github.com/Baniya422/Shree-Sajha-Transport.git
cd Shree-Sajha-Transport
git checkout -b frontend-ui
cd frontend
npm install
copy .env.example .env
npm run dev
```

## Clone And Run Backend

```powershell
git clone https://github.com/Baniya422/Shree-Sajha-Transport.git
cd Shree-Sajha-Transport
git checkout -b backend-api
cd backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```

## Security Notes

- Do not commit `.env` files.
- Do not commit database passwords or mail credentials.
- Do not commit `node_modules/`, `vendor/`, or `frontend/dist/`.
- Keep production credentials outside Git.
