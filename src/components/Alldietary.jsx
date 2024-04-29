import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import Header from "./Header.jsx";
import {fetchData} from '../middleware/middleware.js' //llama al back para traer los datos

function Alldietary (){
    const {token} = useDiet();
    console.log('token alldietary', token)
    const {id} = useParams();
    console.log(id)
    const urlDiet = import.meta.env.VITE_URL+`user/${id}/alldietary`
    console.log('urldiet', urlDiet)
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
            <h1>Alldietary</h1>
            <ul>
            {data === null
             ? (<div>cargando...</div>)
             : (data.map(item =>(
                <li key={item.idPlan}>
                    <Link to={`${item.idPlan}`}>{item.nombre}</Link>
                </li>
            )))
            }

            </ul>
        </> 
    )
}

export default Alldietary

