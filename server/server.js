import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(cors());

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