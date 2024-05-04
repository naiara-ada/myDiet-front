import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import Header from "./Header.jsx";
import {fetchData} from '../middleware/middleware.js' //llama al back para traer los datos

function Alldietary (){
    const {token} = useDiet();
    const {id} = useParams();
    const urlDiet = import.meta.env.VITE_URL+`user/${id}/alldietary`
    const [data, setData] = useState(null)

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
            <h1>Planes dietéticos</h1>
            <ul>
            {data === null
             ? (<div>cargando...</div>)
             : (data.map((item, index) =>(
                <li key={index}>
                    <Link to={`${item.id}`}>{item.Nombre}</Link>
                </li>
            )))
            }

            </ul>
        </> 
    )
}

export default Alldietary

