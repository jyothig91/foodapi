import React from 'react'
import "./reciepe.css"
function Reciepetitle({recipe}) {
  return (

    <div className='reciepeapp'
    onClick={() => window.open(recipe["recipe"]["url"])}
      >
      <img  className="recipeimg"src={recipe["recipe"]["image"]} alt='Recipes'/>
      <p className='recipename'>{recipe["recipe"]["label"]}</p>
      
    </div>
  )
}

export default Reciepetitle;
