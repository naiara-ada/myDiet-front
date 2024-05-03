
import { useState, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { useParams, Link } from "react-router-dom";
import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js';


function NewPlan (){
    const {token} = useDiet();
    console.log('token alldietary', token)
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [nombre, setNombre] = useState('');
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


    const urlDiet = import.meta.env.VITE_URL+'dashboard/diaries'
   
    const callFetchData = async () =>{
        const resData = await fetchData(token, urlDiet);
        console.log('resData getDiaries', resData)
        if (resData){
            setOptdia1(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia1(resData[0]);
            setOptdia2(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia2(resData[0]);
            setOptdia3(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia3(resData[0]);
            setOptdia4(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia4(resData[0]);
            setOptdia5(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia5(resData[0]);
            setOptdia6(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia6(resData[0]);
            setOptdia7(resData.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia7(resData[0]);
        }

        setData(resData)
    }
    
    useEffect(() => {       
       callFetchData()
      }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        

    }
   
   return (
   <>
        <HeaderAdmin />
        <h1>Nuevo Plan</h1>
        {data !== null && (
            <form onSubmit={handleSubmit} className="formClass">
            <div className="formRow">
                <label>Nombre:</label>
                <input
                    type='text'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    required>                    
                </input>
            </div>
            <div className="formRow">
                <label>Fecha:</label>
                <input
                    type='date'
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                    required>                    
                </input>
            </div>

            <div className="formRow">
                <label>Dia1:</label>
                <select value={selOptdia1} onChange={(e)=> setSelOptdia1(e.target.value)}>
                    {optdia1.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label>Dia2:</label>
                <select value={selOptdia2} onChange={(e)=> setSelOptdia2(e.target.value)}>
                    {optdia2.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div> 
            <div className="formRow">
                <label>Dia3:</label>
                <select value={selOptdia3} onChange={(e)=> setSelOptdia3(e.target.value)}>
                    {optdia3.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label>Dia4:</label>
                <select value={selOptdia4} onChange={(e)=> setSelOptdia4(e.target.value)}>
                    {optdia4.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label>Dia5:</label>
                <select value={selOptdia5} onChange={(e)=> setSelOptdia5(e.target.value)}>
                    {optdia5.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>
            <div className="formRow">
                <label>Dia6:</label>
                <select value={selOptdia6} onChange={(e)=> setSelOptdia6(e.target.value)}>
                    {optdia6.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div> 
            <div className="formRow">
                <label>Dia7:</label>
                <select value={selOptdia7} onChange={(e)=> setSelOptdia7(e.target.value)}>
                    {optdia7.map(option => (
                        <option key={option.id} value={option.id}>{option.titulo}</option>
                    ))}
                </select>
            </div>              
            
            
            <button type='submit'>Añadir</button>                
        </form>


        )}
        

    
    </>)

}

export default NewPlan