import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Home() {
  const[recipes,setRecipes]=useState([])
  useEffect(()  =>{
    axios.get('http://localhost:3001/recipe/recipes')
    .then(recipes=>{
      setRecipes(recipes.data)
    }).catch(er => console.log(er))
  },[])
  return (
    <div className='d-flex justify-content-center'>
      <div>
        <h2>Recipes</h2>
        {
          recipes.map(recipe =>(
            <div key={recipe._id} className='mt-4 p-3 border'>
              <Link to={`/read-recipe/${recipe._id}`} className="text-decoration-none">
              <h3>{recipe.name}</h3>
              </Link>
              <img src={recipe.imageUrl} alt="Recipe"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home


