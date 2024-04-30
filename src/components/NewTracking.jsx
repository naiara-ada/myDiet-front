import { useState, useEffect } from "react";
import { useDiet } from "../context/DietContext.jsx";
import { useParams, useLocation} from "react-router-dom";
import {fetchData} from '../middleware/middleware.js'
import LineTracking from "./LineTracking.jsx";


function NewTracking (){
    const {token} = useDiet();
    const {id} = useParams();
    const location = useLocation();
    const {text} = location.state;
    const [nombre, setNombre] = useState(text)
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('');
    const [data, setData] = useState(null)
    const urlDiet = import.meta.env.VITE_URL + `user/${id}/mytracking`

    console.log('name', text)
    //const urlDiet = import.meta.env.VITE_URL + `dashboard/users/${id}/newtracking`

    const callFetchData = async()=>{
        const resData = await fetchData(token, urlDiet)
        console.log('resData', resData)
        setData(resData)
    }

    useEffect(() => {       
        callFetchData()
       }, [])

    const handleSubmit = async(e)=>{
        e.preventDefault()
    }



    return(
        <>
        <h3>Nuevo seguimiento {nombre} </h3>
        <div className="nt-top">
            <form onSubmit={handleSubmit} className="formClass">
                <div className="formRow">
                    <label>Descripción</label>
                    <input 
                        type='text'
                        value={descripcion}
                        onChange={(e)=> setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div className="formRow">
                    <label>Fecha</label>
                    <input 
                        type='date'
                        value={fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                        required
                    />
                </div>
                <div className="formRow">
                    <label>Hora</label>
                    <input 
                        type='time'
                        value={hora}
                        onChange={(e)=> setHora(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Añadir</button>
            </form>

        </div>
        <div className="nt-botton">
            <div className="containerGrid">
                
                {data !== null && (
                        
                    data.map(item =>(
                        <LineTracking key={item.id} item={item}/>
                    ))
                )}
            </div>
        </div>      
        </>
    )
}

export default NewTracking