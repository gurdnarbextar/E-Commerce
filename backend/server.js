// server.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js"; // Import the auth routes

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Set up the routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes); // Use the auth routes

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
