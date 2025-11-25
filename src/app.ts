import express from "express";
import session from "express-session";
import passport from "passport";
import { prisma } from "./lib/prisma;
import { PrismaSessionStore } from "@quixo3/prisma-session-store";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "changeme",
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// placeholder
passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (e) {
    done(e);
  }
});

app.get("/", (_req, res) => {
  res.send("Template working");
});

export default app;
