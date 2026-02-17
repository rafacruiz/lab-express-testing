import express from "express";
import morgan from "morgan";

import "./config/db.config.js";
import router from "./config/routes.config.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", router);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
