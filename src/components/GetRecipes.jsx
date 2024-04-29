import {fetchData} from '../middleware/middleware.js';
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import LineRecipe from './LineRecipe.jsx';


function GetRecipes (){
    const {token} = useDiet();
    const urlDiet = import.meta.env.VITE_URL+'dashboard/recipes'
    const [data, setData] = useState(null)

    const callFetchData = async () =>{
    const resData = await fetchData(token, urlDiet);
    console.log('getrecipes', resData)
    setData(resData)
}

useEffect(() => {       
   callFetchData()
  }, [])

    return (
        <>
        <h1>Recetas</h1>
        {data === null
             ? (<div>cargando...</div>)
             : (
                <div className='containerGrid'>
                    {data.map(item =>(
                        <LineRecipe key={item.id} item={item}/>
                    ))}

                </div>
             )  
        }
        </>
    )
}

export default GetRecipes