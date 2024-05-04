import { useDiet } from "../context/DietContext.jsx";
import { useParams,Link} from "react-router-dom";
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

    console.log(data);
    useEffect(() => {
       
       callFetchData()
      }, [])
     
    return(

        <>
            <Header id={id}/>
            <h1>Mis dietas</h1>
            {data === null
                ? (<div>cargando...</div>)
                : (
                    <div >
                        
                            <div>
                                <h3>Desayunos</h3>  
                                <ul>                  
                                    {data[0].map((desayuno, index) =>(
                                        <div key={desayuno.id}>
                                            <li  key={index}className="liDietary">{desayuno.Titulo}<button className='btnDietary' onClick={() => abrirModalDesayuno(index)}> <Utensils size={18} /></button></li>
                                            {desayunoAbierto && index === indexDesayunoAbierto && (
                                                <Recetas key={index +1} onClose={() => setDesayunoAbierto(false)} data={data[0]} id={indexDesayunoAbierto}/>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        
                         
                            
                            <div>
                                <h3>Comidas</h3>
                                <ul>                                           
                                    {data[1].map((comida, index) =>(
                                        <div key={comida.id}>
                                            <li>{comida.Titulo}<button onClick={()=> abrirModalComida(index)}><Utensils size={18} /></button></li>
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
                                        <div key={cena.id}>
                                            <li>{cena.Titulo}<button onClick={()=> abrirModalCena(index)}><Utensils size={18}  /></button></li>
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

