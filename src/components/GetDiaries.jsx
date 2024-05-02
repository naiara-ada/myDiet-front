import {fetchData} from '../middleware/middleware.js';
import { useEffect, useState } from "react";
import { useDiet } from "../context/DietContext.jsx";
import { Link } from "react-router-dom";
import HeaderAdmin from './HeaderAdmin.jsx';
import LineDiary from './LineDiary.jsx';


function GetDiaries (){
    const {token} = useDiet();
    const urlDiet = import.meta.env.VITE_URL+'dashboard/diaries'
    const [data, setData] = useState(null)
    
    
    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet);
        console.log(resData)
        setData(resData)
    }
    
    useEffect(() => {       
       callFetchData()
      }, [])

    return(
        <>
            <HeaderAdmin />
            <h1>Diarios</h1>
            {data !== null && (
                <div className='containerGrid'>
                    {data.map(item =>(
                        <LineDiary key={item.id} item={item}/>
                    ))}

                </div>
            )}
        </>
    )
}

export default GetDiaries