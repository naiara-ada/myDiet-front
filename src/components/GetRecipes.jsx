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
        <div className='containerAgenda'>
            <h2>Recetas</h2>
            {data === null
                ? (<div>cargando...</div>)
                : (
                    <div>
                        <div className='botonesRecipes'>
                            <button className='btnLink' onClick={handleDesayuno}>Desayuno</button>
                            <button className='btnLink' onClick={handleComida}>Comida</button>
                            <button className='btnLink' onClick={handleCena}>Cena</button>
                            <button><Link className='linkClass' to='/dashboard/recipes/newrecipe' >Nueva receta</Link></button>
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
        </div>
        </>
    )
}

export default GetRecipes