import {fetchData} from '../middleware/middleware.js';
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import LineRecipe from './LineRecipe.jsx';
import { Link } from "react-router-dom";
import HeaderAdmin from './HeaderAdmin.jsx';


function GetRecipes (){
    const {token} = useDiet();
    const urlDiet = import.meta.env.VITE_URL+'dashboard/recipes'
    const [data, setData] = useState(null)
    const [showDesayuno, setShowDesayuno] = useState(true);
    const [showComida, setShowComida] = useState(false);
    const [showCena, setShowCena] = useState(false)
    
    const callFetchData = async () =>{
    const resData = await fetchData(token, urlDiet);
    console.log('getrecipes', resData)
    setData(resData)
}

useEffect(() => {       
   callFetchData()
  }, [showDesayuno, showCena, showComida])

    const handleDesayuno = () =>{
        setShowComida(false);
        setShowDesayuno(true);
        setShowCena(false)
    }
    const handleComida = () =>{
        setShowComida(true);
        setShowDesayuno(false);
        setShowCena(false)
    }
    const handleCena = () =>{
        setShowComida(false);
        setShowDesayuno(false);
        setShowCena(true)
    }

    
    return (
        <>
        <HeaderAdmin />
        <h1>Recetas</h1>
        {data === null
             ? (<div>cargando...</div>)
             : (
                <div>
                    <div className='botonesRecipes'>
                        <button onClick={handleDesayuno}>Desayuno</button>
                        <button onClick={handleComida}>Comida</button>
                        <button onClick={handleCena}>Cena</button>
                        <button><Link to='/dashboard/recipes/newrecipe' >Nueva receta</Link></button>
                    </div>
                    {showDesayuno && (
                        <div className='containerGrid'>
                        {data[0].map(item =>(
                            <LineRecipe key={item.id} item={item} table='desayunos'/>
                        ))}
                        </div>
                    )}
                    {showComida && (
                        <div className='containerGrid'>
                        {data[1].map(item =>(
                            <LineRecipe key={item.id} item={item} table='comidas'/>
                        ))}
                        </div>
                    )}
                    {showCena && (
                        <div className='containerGrid'>
                        {data[2].map(item =>(
                            <LineRecipe key={item.id} item={item} table='cenas'/>
                        ))}
                        </div>
                    )}
                    
                </div>
             )  
        }
        </>
    )
}

export default GetRecipes