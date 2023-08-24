import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from 'react'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'
import { Card, Row, Col, Divider, Input, Button } from "antd";


// let testFoods = [
//   {
//     "name": "Naranja",
//     "calories": 85,
//     "image": "https://i.imgur.com/abKGOcv.jpg",
//     "servings": 1
//   }
// ];



function App() {

  //IT 1
  const [ foods, setFoods ] = useState(foodsJson)
  // toda la info de las comidas

  // solo la vista del usuario
  const [ foodsToRender, setFoodsToRender ] = useState(foods)

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id)
    //creamos una constante con la comida actualizada, que será un filtro de la comida al que le vamos a pasar 
    // todas las comidas menos aquella que tenga el mismo id que la que queremos borrar
    setFoods(updatedFoods)
  }

  const addFood = (newFood) => {
    setFoods([...foods, newFood])
  } 

  return (

    <div>
      <Search 
        foods={foods} 
        setFoodsToRender={setFoodsToRender}
      />
      <AddFoodForm addFood={addFood} foods={foods}/>
  {foods.map((food, i) => (
      <FoodBox key={i} food={food} deleteFood={deleteFood}/>
  ))}

</div>



  );
}

export default App;
