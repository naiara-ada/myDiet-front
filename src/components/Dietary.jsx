import { useDiet } from "../context/DietContext.jsx";
import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState} from "react";
import Recetas from './Recetas.jsx'
import { Utensils } from 'lucide-react';
import Header from "./Header.jsx";
import {fetchData} from '../middleware/middleware.js'
import '../index.css'

function Dietary (){
    const {token} = useDiet();
    const {id, id_plan} = useParams();
    const urlDiet = import.meta.env.VITE_URL+`user/${id}/alldietary/${id_plan}`
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    
    
    const [desayunoAbierto, setDesayunoAbierto] = useState(false);
    const [indexDesayunoAbierto, setIndexDesayunoAbierto] = useState(null);

    const [comidaAbierto, setComidaAbierto] = useState(false);
    const [indexComidaAbierto, setIndexComidaAbierto] = useState(null);
   
    const [cenaAbierto, setCenaAbierto] = useState(false);
    const [indexCenaAbierto, setIndexCenaAbierto] = useState(null);
   


    const abrirModalDesayuno = (index) => {
        setIndexDesayunoAbierto(index);
        setDesayunoAbierto(true);
    }

    const abrirModalComida = (index) =>{
        setIndexComidaAbierto(index);
        setComidaAbierto(true);
    }

    const abrirModalCena = (index) =>{
        setIndexCenaAbierto(index);
        setCenaAbierto(true);
    }

  

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
            <h2>Mis dietas</h2>
            <button onClick={()=> navigate(-1)}>Volver</button>
            {data === null
                ? (<div>cargando...</div>)
                : (
                    <div >
                        
                            <div>
                                <h3>Desayunos</h3>  
                                <ul>                  
                                    {data[0].map((desayuno, index) =>(
                                        <div key={`${desayuno.id}-${index}`}>
                                           <button className='btnDietary' onClick={() => abrirModalDesayuno(index)}> 
                                                <li>{desayuno.Titulo} <Utensils size={18} /></li>
                                            </button>
                                            {desayunoAbierto && index === indexDesayunoAbierto && (
                                                <Recetas onClose={() => setDesayunoAbierto(false)} data={data[0]} id={indexDesayunoAbierto}/>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>                       
                         
                            
                            <div>
                                <h3>Comidas</h3>
                                <ul>                                           
                                    {data[1].map((comida, index) =>(
                                        <div key={`${comida.id}-${index}`}>
                                            <button className='btnDietary' onClick={()=> abrirModalComida(index)}>
                                                <li >{comida.Titulo}<Utensils size={18} /></li>
                                            </button>
                                            {comidaAbierto && index === indexComidaAbierto && (
                                                <Recetas onClose={() => setComidaAbierto(false)} data={data[1]} id={indexComidaAbierto}/>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                             
                            <div>
                                <h3>Cenas</h3>
                                <ul>                   
                                    {data[2].map((cena, index) =>(
                                        <div key={`${cena.id}-${index}`}>
                                            <button className='btnDietary' onClick={()=> abrirModalCena(index)}>
                                                <li >{cena.Titulo}<Utensils size={18}  /></li>
                                                </button>
                                            {cenaAbierto && index === indexCenaAbierto && (
                                                <Recetas onClose={() => setCenaAbierto(false)} data={data[2]} id={indexCenaAbierto}/>
                                            )}
                                        </div>
                                    ))}
                                    </ul>
                            </div>
                        
                    </div>
                )
            }            
        </>
    )
}

export default Dietary

