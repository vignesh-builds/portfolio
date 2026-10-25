# Vignesh – Portfolio

Personal portfolio website.

- **frontend/** – React + Vite
- **backend/** – Spring Boot (contact form API, PostgreSQL)

## Run frontend
```
cd frontend
cp .env.example .env     # points the form at http://localhost:8080
npm install
npm run dev
```

## Run backend
Set these environment variables, then start:

- `DATABASE_JDBC_URL` (e.g. `jdbc:postgresql://localhost:5432/portfolio`)
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

```
cd backend
./mvnw spring-boot:run
```

## API
`POST /api/contact` with JSON `{ "name", "email", "message" }`
Returns `200` with the saved contact, or `400` if a field is missing/invalid.
