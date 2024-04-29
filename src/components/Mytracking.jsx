import { useParams } from "react-router-dom";
import { useDiet } from "../context/DietContext.jsx";
import { useState, useEffect } from "react";
import LineChart from "./LineChart.jsx";
import Header from "./Header.jsx";
import {fetchData} from '../middleware/middleware.js'


function Mytracking (){
    const {token} = useDiet();
    const {id} = useParams();
    const urlDiet = import.meta.env.VITE_URL + `user/${id}/mytracking`
    const [data, setData] = useState(null)
    const [peso, setPeso] = useState([])
    const [grasa, setGrasa] = useState([])
    const [fechas, setFechas] = useState([])

    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet)
        console.log(resData);
        setPeso(resData.map(item => parseFloat(item.Peso)));           
        setFechas(resData.map(item => item.Fecha.substring(0,10)));       
        setGrasa(resData.map(item => parseFloat(item.Grasa_Corporal)));
        
        
        setData(resData)
    }

    useEffect(() => {       
       callFetchData()
      }, [])

    return(
        <>
        <Header id={id}/>
        <h1>Mi Seguimiento</h1> 
        {data === null
         ? (<div>cargando...</div>)
         : (<div>
            
            <div className="containerTracking">
                <div className="tracking">
                    <h3>Peso</h3>
                    <LineChart data={peso} citas={fechas} label='Peso'/>
                </div>
                <div className="tracking">
                    <h3>Grasa corporal (%)</h3>
                    
                    <LineChart data={grasa} citas={fechas} label='Grasa'/>
                </div>   
                    
            </div></div>
         
            )
        }
        
        
        </>
        

    )
}

export default Mytracking