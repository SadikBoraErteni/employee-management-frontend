# Employee Management System — Frontend

React frontend for a simple employee management system. Talks to the
[employee-management-api](https://github.com/SadikBoraErteni/employee-management-api) backend.

## Features

- **Employee list** — table view of all employees fetched from the API
- **Add / edit / delete** — a single form doubles as create and update, plus a delete button per row
- **Plain `fetch`** — no extra HTTP library, calls go straight to the Spring Boot API

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React |
| Build tool | Vite |
| API calls | `fetch` |

## Running locally

```bash
git clone https://github.com/SadikBoraErteni/employee-management-frontend.git
cd employee-management-frontend

npm install
npm run dev
```

Runs on `http://localhost:5173`. Requires the [backend API](https://github.com/SadikBoraErteni/employee-management-api) running on `http://localhost:8080`.
