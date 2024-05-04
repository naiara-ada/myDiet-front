import {fetchData} from '../middleware/middleware.js';
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import Boton from './Boton.jsx'
import {Link} from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin.jsx';

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
        <HeaderAdmin />
        <h2>Mis Pacientes</h2>
        {data === null
        ? (<div>cargando...</div>)
        : (
            <>
            <button><Link to='newuser'>Nuevo Paciente</Link> </button>
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