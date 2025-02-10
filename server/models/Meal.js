import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Meal name is required"] },
  ingredients: { 
    type: [String], 
    required: [true, "At least one ingredient is required"] 
  },
  calories: { 
    type: Number, 
    required: [true, "Calories must be specified"], 
    min: [0, "Calories cannot be negative"] 
  },
  protein: { 
    type: Number, 
    required: [true, "Protein amount is required"], 
    min: [0, "Protein cannot be negative"] 
  },
  carbs: { 
    type: Number, 
    required: [true, "Carbohydrate amount is required"], 
    min: [0, "Carbs cannot be negative"] 
  },
  fats: { 
    type: Number, 
    required: [true, "Fat amount is required"], 
    min: [0, "Fats cannot be negative"] 
  },
  createdAt: { type: Date, default: Date.now }
});

const Meal = mongoose.model("Meal", MealSchema);
export default Meal;

