import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js'

import Boton from "./Boton.jsx";

function User (){
    const urlDiet = import.meta.env.VITE_URL+'user'
    const [data, setData] = useState(null)
    const {token} = useDiet();
    
    
    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet)
        console.log(resData)
        setData(resData)
    }
    useEffect(() => {
       callFetchData()
      }, [])
    return(
        <>
            {data === null 
             ? (<div>cargando...</div>)
             : (
                <div>
                <h1>{data.Nombre} {data.Apellido}</h1>
                <div className="btnContainer">
                    <Boton id={data.id} url={`${data.id}/alldietary`} text='Mis Dietas'/>
                    <Boton id={data.id} url={`${data.id}/mytracking`} text='Mi Seguimiento' vtoken={token}/> 
                    <Boton id={data.id} url={`${data.id}/myagenda`} text='Mi Agenda' vtoken={token}/>                     
                </div>
                </div>)

             }
        </>
    )
}

export default User


