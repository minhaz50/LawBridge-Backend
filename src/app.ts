import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";

const app: Application = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Middleware
app.use(express.json());
app.use(cookieParser());

app.get("/", async (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome to LawBridge System Backend.",
  });
});

export default app;
