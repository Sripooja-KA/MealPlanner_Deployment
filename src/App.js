import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");

  // Fetch meals
  useEffect(() => {
    axios.get(`${API_URL}/meals`)
      .then(res => setMeals(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add meal
  const addMeal = () => {
    if (!mealName) return;

    axios.post(`${API_URL}/meals`, {
      name: mealName,
      items: []
    }).then(res => {
      setMeals([...meals, res.data]);
      setMealName("");
    });
  };

  // Delete meal
  const deleteMeal = (id) => {
    axios.delete(`${API_URL}/meals/${id}`)
      .then(() => {
        setMeals(meals.filter(m => m.id !== id));
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍽 Meal Planner</h1>

      <input
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Enter meal name"
      />
      <button onClick={addMeal}>Add Meal</button>

      <ul>
        {meals.map(meal => (
          <li key={meal.id}>
            {meal.name}
            <button onClick={() => deleteMeal(meal.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
