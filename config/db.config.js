import mongoose from "mongoose";

let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/moviesdb";

if (process.env.NODE_ENV === "test") {
  MONGODB_URI += "_test";
}

mongoose
  .connect(MONGODB_URI)
  .then((db) => {
    if (process.env.NODE_ENV !== "test") {
      console.log(`MongoDB connected: ${db.connection.host}`);
    }
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
