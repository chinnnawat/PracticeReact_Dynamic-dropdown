
import { useState } from 'react';
import './App.css';
import Dropdowns from './components/dropdowns';
import FoodComponent from './components/foodComponent';
import MenuData from './data/MenuData';
function App() {
  const [foods,setFoods] = useState(MenuData)
  const changeFoodData = (e)=>{
    const category = e.target.value
    if(category === "เมนูทั้งหมด"){
      setFoods(MenuData)
    }
    else{
      const result = MenuData.filter((element)=>{
        return element.menu===category
      })
      setFoods(result)
    }
  }
  return (
    <div className="App">
      <Dropdowns changeFoodData={changeFoodData}/>
      <div className='content'>
        {foods.map((data,index)=>{
          return <FoodComponent key={index} {...data}/>
        })}
      </div>
    </div>
  );
}

export default App;
