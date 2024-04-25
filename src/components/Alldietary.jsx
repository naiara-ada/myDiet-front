import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";


function Alldietary (){
    const {token} = useDiet();
    console.log('token alldietary', token)
    const {id} = useParams();
    console.log(id)
    const urlDiet = import.meta.env.VITE_URL+`user/${id}/alldietary`
    console.log('urldiet', urlDiet)
    const [data, setData] = useState(null)

    const fetchData = async() =>{
        try {
            const response = await fetch(urlDiet,{
                headers:{
                    authorization: 'Bearer ' + token
                }                
            });
            console.log(response)
            const resData = await response.json();
            console.log('resData alldietary', resData)
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
            <h1>Alldietary</h1>
            <ul>
            {data === null
             ? (<div>cargando...</div>)
             : (data.map(item =>(
                <li key={item.idPlan}>{item.nombre}</li>
            )))
            }

            </ul>
        </> 
    )
}

export default Alldietary

