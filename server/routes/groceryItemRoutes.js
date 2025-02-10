import express from "express";
import GroceryItem from "../models/GroceryItem.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Add a grocery item
router.post("/", authMiddleware, async (req, res) => {
    try {
      const item = new GroceryItem({ ...req.body, userId: req.user.userId });
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

// Get all grocery items
router.get("/", authMiddleware, async (req, res) => {
    try {
      const items = await GroceryItem.find({ userId: req.user.userId }); // Only return user's grocery items
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get a single grocery item
router.get("/:id", async (req, res) => {
  try {
    const item = await GroceryItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a grocery item (mark as purchased or edit)
router.put("/:id", async (req, res) => {
  try {
    const item = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a grocery item
router.delete("/:id", async (req, res) => {
  try {
    const item = await GroceryItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
