const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy meal data
let meals = [
  { id: 1, name: "Breakfast", items: ["Oats", "Banana"] },
  { id: 2, name: "Lunch", items: ["Rice", "Dal", "Vegetables"] }
];

// Routes
app.get("/", (req, res) => {
  res.send("Meal Planner API is running 🚀");
});

app.get("/meals", (req, res) => {
  res.json(meals);
});

app.post("/meals", (req, res) => {
  const newMeal = {
    id: meals.length + 1,
    ...req.body
  };
  meals.push(newMeal);
  res.status(201).json(newMeal);
});

app.delete("/meals/:id", (req, res) => {
  const id = parseInt(req.params.id);
  meals = meals.filter(meal => meal.id !== id);
  res.json({ message: "Meal deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
