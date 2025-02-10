import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mealRoutes from "./routes/mealRoutes.js";
import groceryItemRoutes from "./routes/groceryItemRoutes.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/meals", mealRoutes);
app.use("/api/grocery-items", groceryItemRoutes);

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("GroceryGenie Backend is Running!");
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch((error) => console.error("MongoDB Connection Error:", error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});