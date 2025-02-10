import mongoose from "mongoose";

const GroceryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  category: { type: String, required: true }, // Example: "Protein", "Vegetables"
  purchased: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const GroceryItem = mongoose.model("GroceryItem", GroceryItemSchema);
export default GroceryItem;
