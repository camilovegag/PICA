import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Logging middleware
app.use((req, _, next) => {
  logger.http(`${req.method} ${req.url}`);
  next();
});

app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, _, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
