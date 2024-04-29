import { useDiet } from "../context/DietContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Recetas from './Recetas.jsx'
import { Eye } from 'lucide-react';
import { Utensils } from 'lucide-react';
import Header from "./Header.jsx";
import {fetchData} from '../middleware/middleware.js'

function Dietary (){
    const {token} = useDiet();
    console.log(useParams())
    const {id, id_plan} = useParams();
    const urlDiet = import.meta.env.VITE_URL+`user/${id}/alldietary/${id_plan}`
    const [data, setData] = useState(null);
    const [showRecetas, setShowRecetas] = useState(false);

    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet)
        setData(resData)
    }

    useEffect(() => {
       
       callFetchData()
      }, [])
     


    return(

        <>
            <Header id={id}/>
            <h1>Dietary</h1>
           {data === null
            ? <div>cargando...</div>
            : (
                <div>
                    
                    <h2>{data.nombre}</h2>
                    <div className="dias">
                        <div className="diasem">
                       <p>Desayuno: {data.dias1[0].titulo}</p>
                            <p>Comida: {data.dias1[1].titulo}<button onClick={()=> setShowRecetas(true)}><Utensils /> </button></p>
                            <p>Cena: {data.dias1[2].titulo}</p>
                        </div>
                        <div className="diasem">
                            <p>Desayuno: {data.dias2[0].titulo}</p>
                            <p>Comida: {data.dias2[1].titulo}</p>
                            <p>Cena: {data.dias2[2].titulo}</p>
                        </div>
                    </div>
                    {showRecetas && <Recetas onClose={()=> setShowRecetas(false)} data={data}/>}
                </div>
            )
           }
           
           
           
           
            
        </>
    )
}

export default Dietary