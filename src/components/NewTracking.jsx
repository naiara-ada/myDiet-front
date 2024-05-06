import { useState, useEffect } from "react";
import { useDiet } from "../context/DietContext.jsx";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import {fetchData} from '../middleware/middleware.js'
import LineTracking from "./LineTracking.jsx";
import HeaderAdmin from "./HeaderAdmin.jsx";
import CalendarApp from "./CalendarApp.jsx";
import dayjs from 'dayjs'


function NewTracking (){
    const {token} = useDiet();
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const {text} = location.state;
    const [nombre, setNombre] = useState(text)
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('');
    const [data, setData] = useState(null);
    const [dataAgenda, setDataAgenda] = useState(null);
    const [events, setEvents] = useState([]);
    const urlAgenda = import.meta.env.VITE_URL + `user/${id}/myagenda`
    

    console.log('name', text)
    //const urlDiet = import.meta.env.VITE_URL + `dashboard/users/${id}/newtracking`

    const callFetchData = async()=>{
        const urlDiet = import.meta.env.VITE_URL + `user/${id}/mytracking`
        const resData = await fetchData(token, urlDiet)
        console.log('resData', resData)
        setData(resData)
        const resAgenda = await fetchData(token, urlAgenda)
        setEvents( resAgenda.map(item => (
            {
            start:dayjs(item.Fecha.substring(0,10) + ' '+ item.Hora_de_la_Cita).toDate(),
            end:dayjs(item.Fecha.substring(0,10) + ' '+ item.Hora_de_la_Cita).add(30, 'minute').toDate(),
            title: item.Descripcion
            }
        ))) 
        setDataAgenda(resAgenda)
    }

    useEffect(() => {       
        callFetchData()
       }, [])

    const handleSubmit = async(e)=>{
        const urlDiet = import.meta.env.VITE_URL + `dashboard/users/${id}/newtracking`
        e.preventDefault();

        try {
            const payload={
                Descripcion: descripcion,
                Fecha: fecha,
                Hora_de_la_Cita: hora
            }
            const response = await fetch(urlDiet,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    authorization: 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            })

            if(response.ok){
                console.log('ok guardado')
                navigate(-1)
            }            
        } catch (error) {
            console.log(error)
        }
    }



    return(
        <>
        <HeaderAdmin />
        <div className='containerAgenda'>
            <h3>Nuevo seguimiento {nombre} </h3> 
            <div className="nt-top">
                <form onSubmit={handleSubmit} className="formClass containerHome">
                    <div className="formRow">
                        <label className="labelform">Descripción</label>
                        <input 
                            type='text'
                            value={descripcion}
                            onChange={(e)=> setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formRow">
                        <label className="labelform">Fecha</label>
                        <input 
                            type='date'
                            value={fecha}
                            onChange={(e)=> setFecha(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formRow">
                        <label className="labelform">Hora</label>
                        <input 
                            type='time'
                            value={hora}
                            onChange={(e)=> setHora(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btnLink form' type='submit'>Añadir</button>
                </form>
                
                
            </div>
            <div className="nt-botton">
                <div className="containerGrid">
                    <div className="titulos">
                        <label style={{width: '20px'}}>ID</label>
                        <label style={{width: '175px'}}>Título</label> 
                        <label style={{width: '60px'}}>Fecha</label>
                        <label style={{width: '50px'}}>Hora</label><label>Peso</label>
                        <label style={{width: '40px'}}>Grasa</label>
                        <label style={{width: '40px'}}>Act</label>
                    </div>
                    
                    {data !== null && (                        
                        data.map(item =>(
                            <LineTracking key={item.id} item={item}/>
                        ))
                    )}
                </div>
            </div>     
        </div> 
        </>
    )
}

export default NewTracking