import { useParams, useNavigate} from "react-router-dom";
import { useDiet } from "../context/DietContext.jsx";
import { useState, useEffect } from "react";
import {fetchData} from '../middleware/middleware.js'
import HeaderAdmin from "./HeaderAdmin.jsx";

function UpdatePlan (){
    const {token} = useDiet();
    const {id, id_plan} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null)
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
    const urlDiet = import.meta.env.VITE_URL + `dashboard/users/${id}/${id_plan}`

    const callFetchData = async () =>{
        
        const resData = await fetchData(token, urlDiet)
        const urlDiary = import.meta.env.VITE_URL+'dashboard/diaries'
        const resDiary = await fetchData(token, urlDiary);
        console.log('resdata', resData)
        console.log('resdiary', resDiary)

        if (resData && resDiary){
            setNombre(resData[0].nombrePlan);
            setDescripcion(resData[0].Descripcion)
            setFecha(resData[0].Fecha);
            setOptdia1(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia1(resData[0].id)
            setOptdia2(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia2(resData[1].id)
            setOptdia3(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia3(resData[2].id)
            setOptdia4(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia4(resData[3].id)
            setOptdia5(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia5(resData[4].id)
            setOptdia6(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia6(resData[5].id)
            setOptdia7(resDiary.map(item => ({
                id: item.id,
                titulo: item.Nombre
            })));
            setSelOptdia7(resData[6].id)        

            setData(resData)
        }
        
        

        
    }

    useEffect(() => {       
       callFetchData()
      }, [])


      const handleSubmit = async (e)=>{
        e.preventDefault();
                      
        const payload={
            id: id_plan,
            Nombre: nombre,
            Descripcion: descripcion,
            Fecha: fecha,
            dias:[selOptdia1, selOptdia2, selOptdia3, selOptdia4, selOptdia5, selOptdia6, selOptdia7]
        }

        try {
            const response = await fetch(urlDiet, {
                method: 'PUT',
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

    
    return(
        <>
            <HeaderAdmin />
            <h2>Actualizar Plan Dietético</h2>                  

            {data !== null && (
                 <div className="containerHome">
                <form onSubmit={handleSubmit} className="formClass">
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
                
                
                <button type='submit'>Actualizar</button>                
            </form>

            </div>
            )}
           
            </>
        )
    
}

export default UpdatePlan