import mongoose from "mongoose";
import "../config/db.config.js";

beforeAll(async () => {
  await mongoose.connection.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});
