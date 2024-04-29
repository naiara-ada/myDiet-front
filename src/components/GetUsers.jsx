import {fetchData} from '../middleware/middleware.js';
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import Boton from './Boton.jsx'
import {Link} from 'react-router-dom'

function GetUsers (){
    const {token} = useDiet();
    const urlDiet = import.meta.env.VITE_URL+'dashboard/users'
    const [data, setData] = useState(null)
    
    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet);
        console.log('getUsers', resData)
        setData(resData)
    }

    useEffect(() => {       
       callFetchData()
      }, [])

    return(
        <>
        <h1>Mis Pacientes</h1>
        {data === null
        ? (<div>cargando...</div>)
        : (
            <>
            <Link to='newuser'>Nuevo Paciente</Link> 
                <div className='btnContainer'>
                {data.map(item=>(
                    <Boton key={item.id} url={`${item.id}`} text={`${item.Nombre} ${item.Apellido}`} />
                ))} 

                </div>
            </>
        )
        
        }
        </>
    )
}

export default GetUsers