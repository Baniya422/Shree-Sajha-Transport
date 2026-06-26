# Deployment Notes

These notes are placeholders for future production deployment planning.

## Frontend

- Build with `npm run build` inside `frontend/`.
- Deploy the generated `frontend/dist/` folder to the selected frontend host.
- Set `VITE_API_URL` to the production API URL before building.
- Keep SPA redirects enabled so React Router routes load correctly.

## Backend

- Deploy the Laravel app from `backend/`.
- Run `composer install --no-dev --optimize-autoloader` on production.
- Set production `.env` values on the server, not in Git.
- Run `php artisan key:generate` only when creating a new environment key.
- Run migrations with `php artisan migrate --force`.
- Configure the web server document root to `backend/public`.

## MySQL

- Use a production MySQL database and user with a strong password.
- Do not use the local XAMPP root user in production.
- Back up the database before running production migrations.
- Restrict database access to the backend server.

## Environment Variables

- Never commit `.env`.
- Keep API URLs, database credentials, mail credentials, app keys, and production secrets in server environment configuration.
- Review `backend/.env.example` and `frontend/.env.example` whenever a new environment variable is added.

## Before Production

- Change the seeded development admin password.
- Confirm Sanctum stateful domains and CORS settings for the final frontend domain.
- Enable HTTPS.
- Set `APP_ENV=production` and `APP_DEBUG=false`.
- Configure queues, logs, backups, and monitoring.
