import mongoose from "mongoose";

const GroceryItemSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Grocery item name is required"] },
  quantity: { 
    type: Number, 
    required: [true, "Quantity must be specified"], 
    min: [1, "Quantity must be at least 1"] 
  },
  category: { 
    type: String, 
    required: [true, "Category is required"] 
  },
  purchased: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const GroceryItem = mongoose.model("GroceryItem", GroceryItemSchema);
export default GroceryItem;