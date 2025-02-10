import express from "express";
import Meal from "../models/Meal.js";

const router = express.Router();

// Create a new meal
router.post("/", async (req, res) => {
    try {
      const meal = new Meal(req.body);
      await meal.save();
      res.status(201).json(meal);
    } catch (error) {
      res.status(400).json({ error: error.message || "Invalid meal data" });
    }
  });
  

// Get all meals
router.get("/", async (req, res) => {
  try {
    const meals = await Meal.find();
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
