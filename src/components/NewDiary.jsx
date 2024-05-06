import { useState, useEffect } from "react";
import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js';
import HeaderAdmin from "./HeaderAdmin";
import { useNavigate } from "react-router-dom";


function NewDiary () {
    const {token} = useDiet();
    const [data, setData] = useState(null);
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [optionsDesayuno, setOptionsDesayuno] = useState([]);
    const [selOptionDesayuno, setSelOptionDesayuno] = useState(null)
    const [optionsComida, setOptionsComida] = useState([]);
    const [selOptionComida, setSelOptionComida] = useState(null)
    const [optionsCena, setOptionsCena] = useState([]);
    const [selOptionCena, setSelOptionCena] = useState(null)
    const navigate = useNavigate();

    const callFetchData = async () =>{
        const urlDiet = import.meta.env.VITE_URL+'dashboard/recipes'
        const resData = await fetchData(token, urlDiet);
        

        if(resData ){
            setOptionsDesayuno(resData[0].map(recipe => ({
                id: recipe.id,
                titulo: recipe.Titulo
            })));
            setSelOptionDesayuno(resData[0][0]);
            setOptionsComida(resData[1].map(recipe => ({
                id: recipe.id,
                titulo: recipe.Titulo
            })));
            setSelOptionComida(resData[1][0])
            setOptionsCena(resData[2].map(recipe => ({
                id: recipe.id,
                titulo: recipe.Titulo
            })));
            setSelOptionCena(resData[2][0])

            setData(resData)
        }
       
    }
    
    useEffect(() => {       
       callFetchData()
      }, [])

      const handleSubmit = async (e)=>{
        e.preventDefault()
        const urlDiet = import.meta.env.VITE_URL+'dashboard/diaries/newdiary'
        const payload ={
            Nombre: nombre,
            Fecha: fecha,
            Desayuno_id: selOptionDesayuno,
            Comida_id: selOptionComida,
            Cena_id: selOptionCena
        }
         try {
            const response = await fetch(urlDiet, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json', 
                     authorization: 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            })
              
            if(response.ok){
               console.log('ok')
               navigate('/dashboard/diaries'); //va a la pagina anterior.
            }            
        } catch (error) {
            console.log(error)
        }

      } 

    return(
        <>
        <HeaderAdmin />
        <div className='containerAgenda'>
        <h2> Nuevo Diario</h2>
        {data !== null && (
            <>
            <form onSubmit={handleSubmit} className="formClass containerHome">
            <div className="formRow">
                <label className="labelform">Titulo:</label>
                <input
                    type='text'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
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
                <label className="labelform">Desayuno:</label>
                <select value={selOptionDesayuno} onChange={(e)=> setSelOptionDesayuno(e.target.value)}>
                                {optionsDesayuno.map(option => (
                                    <option key={option.id} value={option.id}>{option.titulo}</option>
                                ))}
                </select>
            </div>
            <div className="formRow">
                <label className="labelform">Comida:</label>
                <select value={selOptionComida} onChange={(e)=> setSelOptionComida(e.target.value)}>
                                {optionsComida.map(option => (
                                    <option key={option.id} value={option.id}>{option.titulo}</option>
                                ))}
                            </select>
            </div>
            <div className="formRow">
                <label className="labelform">Cena:</label>
                <select value={selOptionCena} onChange={(e)=> setSelOptionCena(e.target.value)}>
                                {optionsCena.map(option => (
                                    <option key={option.id} value={option.id}>{option.titulo}</option>
                                ))}
                            </select>
            </div>
            <button className='btnLink form' type='submit'>Añadir</button>                
        </form>
            
            </>
        )}
        
        </div>
        </>
    )
}

export default NewDiary