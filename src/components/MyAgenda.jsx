import { useDiet } from "../context/DietContext.jsx";
import { useParams } from "react-router-dom";
import {fetchData} from '../middleware/middleware.js'
import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import CalendarApp from "./CalendarApp.jsx";
import dayjs from 'dayjs'

function MyAgenda (){
    const {token} = useDiet();
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [events, setEvents] = useState([]);
    const urlDiet = import.meta.env.VITE_URL + `user/${id}/myagenda`
    console.log(id)

    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet)
               
        //preparamos los eventos para poder enviarlos al calendario
        setEvents( resData.map(item => (
            {
            start:dayjs(item.Fecha.substring(0,10) + ' '+ item.Hora_de_la_Cita).toDate(),
            end:dayjs(item.Fecha.substring(0,10) + ' '+ item.Hora_de_la_Cita).add(30, 'minute').toDate(),
            title: item.Descripcion
            }
        )))         

        setData(resData)
    }

    useEffect(() => {       
       callFetchData()
      }, [])

    return(
        <>
            <Header id={id}/>
            <h1>Agenda</h1> 
            <CalendarApp events={events} />

        </>
    )
}

export default MyAgenda