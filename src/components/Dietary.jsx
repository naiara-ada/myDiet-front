import { useDiet } from "../context/DietContext.jsx";
import { useParams,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Recetas from './Recetas.jsx'
import { Eye } from 'lucide-react';
import { Utensils } from 'lucide-react';
import Header from "./Header.jsx";
import {fetchData} from '../middleware/middleware.js'
import LineRecipe from './LineRecipe.jsx';

function Dietary (){
    const {token} = useDiet();
    console.log(useParams())
    const {id, id_plan} = useParams();
    const urlDiet = import.meta.env.VITE_URL+`user/${id}/alldietary/${id_plan}`
    const [data, setData] = useState(null);
    //const [showRecetas, setShowRecetas] = useState(false);

    const [showDesayunos, setShowDesayunos] = useState(false);
    const [showComidas, setShowcomidas] = useState(false);
    const [showCenas, setShowCenas] = useState(false);


    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet)
        setData(resData)
        console.log('!!!!!!RESDATA DE DIETARY!!!!!!',resData)
    }

    console.log(data);
    useEffect(() => {
       
       callFetchData()
      }, [])
     
    return(

        <>
            <Header id={id}/>
            <h1>Dietary</h1>
            {data === null
                ? (<div>cargando...</div>)
                : (
                    <div>
                        <ul> 
                            <div>
                                <h3>Desayunos</h3>                   
                                {data[0].map((item, index) =>(
                                    <li key={item.id}>                                    
                                        <button onClick={() => setShowDesayunos(true)}>{item.Titulo}<Utensils /></button>
                                        {showDesayunos && <Recetas onClose={()=> setShowDesayunos(false)} data={item}/>}
                                    </li>
                                ))}
                            </div>
                            <div>
                                <h3>Comidas</h3>                                           
                                {data[1].map(item =>(
                                    <li key={item.id}>                                    
                                    <Link to={`${item.id}`}> {item.Titulo}</Link>
                                    <button onClick={() => setShowcomidas(true)}><Utensils /></button>
                                    {showComidas && <Recetas onClose={()=> setShowcomidas(false)} data={item}/>}
                                    
                                </li>
                                ))}
                            </div>
                            <div>
                                <h3>Cenas</h3>                   
                                {data[2].map(item =>(
                                    <li key={item.id}>                                    
                                    <Link to={`${item.id}`}> {item.Titulo}</Link>
                                    <button onClick={() => setShowCenas(true)}><Utensils /></button>
                                    {showCenas && <Recetas onClose={()=> setShowCenas(false)} data={item}/>}
                                </li>
                                ))}
                            </div>
                        </ul>
                    </div>
                )
            }            
        </>
    )
}

export default Dietary

