import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";

import Boton from "./Boton.jsx";

function User (){
    const urlDiet = import.meta.env.VITE_URL+'user'
    const [data, setData] = useState(null)
    const {token} = useDiet();
    console.log('user de diet',token)

    const fetchData = async () =>{
        try {
            const response = await fetch(urlDiet,{
                headers:{
                    authorization: 'Bearer ' + token
                }
            });
            console.log(response)
            const resData = await response.json();
            console.log('tipo resData',typeof resData)
            setData(JSON.parse(resData));            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
      }, [])

    
    return(
        <>
            {data === null 
             ? (<div>cargando...</div>)
             : (
                <div>
                <h1>User</h1>
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


