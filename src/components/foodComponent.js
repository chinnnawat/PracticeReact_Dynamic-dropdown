import React from "react"
import "../App.css"
import MenuData from "../data/MenuData"
const FoodComponent=({foodName,image_url})=>{
    return(
        <div className="singleFood">
            <h2>{foodName}</h2>
            <img src={image_url} alt={foodName}></img>
        </div>
    )
}
export default FoodComponent