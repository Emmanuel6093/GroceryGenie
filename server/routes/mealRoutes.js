import express from "express";
import Meal from "../models/Meal.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new meal
router.post("/", authMiddleware, async (req, res) => {
    try {
      const meal = new Meal({ ...req.body, userId: req.user.userId });
      await meal.save();
      res.status(201).json(meal);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// Get all meals
router.get("/", authMiddleware, async (req, res) => {
    try {
      const meals = await Meal.find({ userId: req.user.userId }); // Only get meals for this user
      res.json(meals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get a single meal
router.get("/:id", async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.status(404).json({ error: "Meal not found" });
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a meal
router.put("/:id", async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!meal) return res.status(404).json({ error: "Meal not found" });
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a meal
router.delete("/:id", async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    if (!meal) return res.status(404).json({ error: "Meal not found" });
    res.json({ message: "Meal deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
