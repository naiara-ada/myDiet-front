import { useState, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { useParams, useNavigate } from "react-router-dom";
import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js';


function NewPlan (){
    const {token} = useDiet();
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [optdia1, setOptdia1] = useState([]);
    const [selOptdia1, setSelOptdia1] = useState(null);
    const [optdia2, setOptdia2] = useState([]);
    const [selOptdia2, setSelOptdia2] = useState(null);
    const [optdia3, setOptdia3] = useState([]);
    const [selOptdia3, setSelOptdia3] = useState(null);
    const [optdia4, setOptdia4] = useState([]);
    const [selOptdia4, setSelOptdia4] = useState(null);
    const [optdia5, setOptdia5] = useState([]);
    const [selOptdia5, setSelOptdia5] = useState(null);
    const [optdia6, setOptdia6] = useState([]);
    const [selOptdia6, setSelOptdia6] = useState(null);
    const [optdia7, setOptdia7] = useState([]);
    const [selOptdia7, setSelOptdia7] = useState(null);
    const navigate = useNavigate();


    
   
    const callFetchData = async () =>{
        const urlDiet = import.meta.env.VITE_URL+'dashboard/diaries'
        const resData = await fetchData(token, urlDiet);
        if (resData){
            setOptdia1(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia1(resData[0].id);
            setOptdia2(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia2(resData[0].id);
            setOptdia3(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia3(resData[0].id);
            setOptdia4(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia4(resData[0].id);
            setOptdia5(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia5(resData[0].id);
            setOptdia6(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia6(resData[0].id);
            setOptdia7(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia7(resData[0].id);
        }

        setData(resData)
    }
    
    useEffect(() => {       
       callFetchData()
      }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const urlPlan = import.meta.env.VITE_URL+`dashboard/users/${id}/newplan`
        const payload={
            Nombre: nombre,
            Descripcion: descripcion,
            Fecha: fecha,
            dias:[selOptdia1, selOptdia2, selOptdia3, selOptdia4, selOptdia5, selOptdia6, selOptdia7]
        }

         try {
            const response = await fetch(urlPlan, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json', 
                     authorization: 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            })
              
            if(response.ok){
                navigate(-1)
            }            
        } catch (error) {
            console.log(error)
            
        }


    }
   
   return (
   <>
        <HeaderAdmin />
        <div className="containerAgenda">
        <h2>Nuevo Plan</h2>
        {data !== null && (
            <form onSubmit={handleSubmit} className="formClass containerHome">
            <div className="formRow">
                <label className="labelform">Nombre:</label>
                <input
                    type='text'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    required>                    
                </input>
            </div>
            <div className="formRow">
                <label className="labelform">Descripción:</label>
                <input
                    type='text'
                    value={descripcion}
                    onChange={(e)=>setDescripcion(e.target.value)}
                    required>                    
                </input>
            </div>
            <div className="formRow">
                <label className="labelform">Fecha:</label>
                <input
                    type='date'
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                    required>                    
                </input>
            </div>

            <div className="formRow">
                <label className="labelform">Dia1:</label>
                <select value={selOptdia1} onChange={(e)=> setSelOptdia1(e.target.value)}>
                    {optdia1.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label className="labelform">Dia2:</label>
                <select value={selOptdia2} onChange={(e)=> setSelOptdia2(e.target.value)}>
                    {optdia2.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div> 
            <div className="formRow">
                <label className="labelform">Dia3:</label>
                <select value={selOptdia3} onChange={(e)=> setSelOptdia3(e.target.value)}>
                    {optdia3.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label className="labelform">Dia4:</label>
                <select value={selOptdia4} onChange={(e)=> setSelOptdia4(e.target.value)}>
                    {optdia4.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label className="labelform">Dia5:</label>
                <select value={selOptdia5} onChange={(e)=> setSelOptdia5(e.target.value)}>
                    {optdia5.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label className="labelform">Dia6:</label>
                <select value={selOptdia6} onChange={(e)=> setSelOptdia6(e.target.value)}>
                    {optdia6.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div> 
            <div className="formRow">
                <label className="labelform">Dia7:</label>
                <select value={selOptdia7} onChange={(e)=> setSelOptdia7(e.target.value)}>
                    {optdia7.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>              
            
            
            <button className='btnLink form' type='submit'>Añadir</button>                
        </form>


        )}
        
        </div>
    
    </>)
}

export default NewPlan