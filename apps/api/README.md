# Himalayan Gold API

A premium NestJS backend for the Himalayan Gold e-commerce platform, providing secure authentication and honey product management.

## 🚀 Features

- **🛡️ Secure Authentication**: Cookie-based JWT authentication with HttpOnly cookies.
- **🍯 Product Management**: CRUD and listing for honey products and categories.
- **🛠️ Prisma ORM**: Type-safe database access with PostgreSQL.
- **📦 Containerized**: Database and pgAdmin managed via Docker Compose.
- **✅ Validation**: Strict request validation using `class-validator`.
- **🏥 Health Checks**: Integrated health monitoring endpoint.

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Auth**: [Passport.js](https://www.passportjs.org/) + [JWT](https://jwt.io/)
- **Runtime/PM**: [Bun](https://bun.sh/)

## 🏁 Getting Started

### 1. Database Setup

Start the PostgreSQL and pgAdmin containers:

```bash
docker compose up -d
```

_Note: Postgres is mapped to host port **5434**._

### 2. Environment Configuration

Copy the template and fill in your secrets:

```bash
cp .env.example .env
```

### 3. Database Migration & Seeding

Apply migrations and populate the database with initial products from `content.json`:

```bash
bunx prisma migrate dev
bun prisma/seed.ts
```

### 4. Run the API

```bash
# Development mode
bun run dev

# Production build
bun run build
bun run start:prod
```

## 📡 API Endpoints

### Authentication

- `POST /api/auth/signup`: Create a new account.
- `POST /api/auth/login`: Authenticate and set HttpOnly cookie.
- `POST /api/auth/logout`: Clear the authentication cookie.
- `GET /api/auth/me`: Fetch current user profile (Protected).

### E-commerce

- `GET /api/products`: List all honey products.
- `GET /api/products/:id`: Get product details.
- `GET /api/categories`: List all honey categories with nested products.

### Monitoring

- `GET /api/health`: Service health status.

## 🗄️ Database Management

- **pgAdmin**: Accessible at [http://localhost:5050](http://localhost:5050)
- **Prisma Studio**: `bunx prisma studio`

## 📜 License

MIT
