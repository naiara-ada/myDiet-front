import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js'
import { useState, useEffect } from "react";
import CalendarApp from "./CalendarApp.jsx";
import dayjs from 'dayjs'
import HeaderAdmin from "./HeaderAdmin.jsx";


function GetAgenda (){
    const {token} = useDiet();
    const urlDiet = import.meta.env.VITE_URL + `dashboard/agenda`
    const [data, setData] = useState(null);   
    const [events, setEvents] = useState([]);

    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet);
        console.log(resData)
        //preparamos los eventos para poder enviarlos al calendario
        
        setEvents( resData.map(item => (
            {
            start:dayjs(item.Fecha.substring(0,10) + ' '+ item.Hora_de_la_Cita).toDate(),
            end:dayjs(item.Fecha.substring(0,10) + ' '+ item.Hora_de_la_Cita).add(30, 'minute').toDate(),
            title: item.Nombre + ' ' + item.Apellido +' - ' + item.Descripcion 
            }
        )))       

        setData(resData)
    }

    useEffect(() => {       
       callFetchData()
      }, [])


    return (
        <>
            <HeaderAdmin />
            <h1>Agenda</h1>
            <CalendarApp events={events} />
        </>
    )
}

export default GetAgenda