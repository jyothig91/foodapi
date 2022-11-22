import React, { useState } from "react";
import "./App.css";
import Reciepetitle from "./components/Rciepe";

function App() {
  const [query,setquery]=useState("");
  const [ recipes,setRecipes]=useState([]);
  const APP_ID = "f758b8a6";
  const APP_KEY = "684e8f454b308d8547d98f9a77b03cca	";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
  
      const result = await fetch(url);
      const respons=  await result.json();
      setRecipes(respons.hits);
     console.log(respons);
    
  };

   const onSubmit = (e) =>{
    e.preventDefault();
    getData();
   }
  return (
    <div className="app">
      <h1 onClick={getData}>Food Searching App</h1>
     <form className="searchform" onSubmit={onSubmit} >
      <input  type="text"  className="app_input" value={query}onChange={(e)=>setquery(e.target.value)}/>
      <input  type="submit" className='appsubmit'  value="Search"/>
     </form>
     <div className="appreciepe">
      {  recipes.map((recipe) => {
         return  <Reciepetitle recipe={recipe}/>;
        })
      };

     </div>
    </div>
  );
}

export default App;