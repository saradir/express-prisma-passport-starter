# Express + Prisma + Passport Starter (TypeScript)

A clean, minimal starter template for building Node.js web applications using:

- Express
- Prisma ORM
- Passport.js (session-based authentication)
- TypeScript
- Prisma Session Store

This template contains a fully configured project structure with no application-specific models or migrations.  
It is meant to be a clean starting point for any Express + Prisma project.

---

## Features

- Express server with JSON & URL-encoded parsing
- Prisma ORM (empty schema by default)
- Passport.js skeleton (serializeUser / deserializeUser)
- Session-based authentication via express-session
- Prisma-backed session store
- TypeScript tooling (tsx, ts-node, typings)
- Clean project structure under `src/`
- `.env.example` included
- No application logic, no models, no migrations included

---

## Project Structure

```
project/
│
├── prisma/
│   └── schema.prisma          # Empty; add your models here
│
├── src/
│   ├── app.ts                 # Express entrypoint
│   ├── lib/
│   │   └── prisma.ts          # PrismaClient instance
│   ├── routes/                # Empty
│   └── controllers/           # Empty
│
├── .env.example               # Copy to .env and edit
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Getting Started

### 1. Create a new project from this template

Click **Use this template** on GitHub  
or use GitHub CLI:

```
gh repo create <new-project-name> --template saradir/express-prisma-passport-starter
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Set up environment variables

Copy `.env.example` → `.env`:

```
cp .env.example .env
```

Fill in:

- `DATABASE_URL`
- `SESSION_SECRET`

---

### 4. Start the development server

```
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## Adding Prisma Models

Edit `prisma/schema.prisma` and add your models.

Then generate a migration:

```
npx prisma migrate dev
```

This applies the schema and regenerates Prisma Client automatically.

---

## Adding Authentication

This template includes Passport setup:

- `serializeUser`
- `deserializeUser`
- `passport.initialize()`
- `passport.session()`

To activate authentication, add a strategy (e.g. LocalStrategy) and implement register/login routes.

---

## Technologies Used

- Node.js
- Express
- TypeScript
- Prisma ORM
- Passport.js
- express-session
- prisma-session-store
- tsx / ts-node

---

## License

MIT
