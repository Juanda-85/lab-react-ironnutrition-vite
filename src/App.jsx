import "./App.css";
import React, { useState } from 'react';
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  }
  // const mockFood = {
  //   name: "Orange",
  // calories: 85,
  // image: "https://i.imgur.com/abKGOcv.jpg",
  // servings: 1
  // };
//   return (
//     <div className="App">
//       {/* <h1>LAB | React IronNutrition</h1> */}
//       <FoodBox food={mockFood} />
//      </div>
//   );
// }


//   return (
//     <div className="App">
//       {foods.map((food, index) => (
//         <FoodBox key={index} food={food} />
//       ))}
//     </div>
//   );
// }


const deleteFood = (id) => {
  const updatedFoods = foods.filter((food) => food.id !== id);
  setFoods(updatedFoods);
};

// return (
//   <div className="App">
//     {foods.map((food) => (
//       <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
//       ))}
//   </div>
// );
// }
return (
  <div className="App">
      <AddFoodForm addFood={addFood} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} />
        ))}
    </div>
  );
}
export default App;