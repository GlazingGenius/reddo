import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const allowedOrigins = (process.env.FRONTEND_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser tools (no Origin header) and any explicitly whitelisted origin.
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error(`Origin ${origin} is not allowed by CORS.`));
    },
  })
);
app.use(express.json({ limit: "100kb" }));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api", chatRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.use(errorHandler);

export default app;
