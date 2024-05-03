import { useState, useEffect } from "react";
import { useDiet } from "../context/DietContext.jsx";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

function NewRecipe (){
    const {token} = useDiet();
    const [tipo, setTipo] = useState('desayuno');
    const [titulo, setTitulo] = useState('')
    const [ingredientes, setIngredientes] = useState('');
    const [preparacion, setPreparacion] = useState('');
    const navigate = useNavigate();
    const [res, setRes] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const urlDiet = import.meta.env.VITE_URL+'dashboard/recipes/newrecipe'
        console.log(urlDiet)
        const payload={
            tipo: tipo,
            Titulo: titulo,
            Ingredientes: ingredientes,
            Preparacion: preparacion
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
                setRes(true)
                setTitulo('');
                setIngredientes('');
                setPreparacion('');
                setTipo('desayuno');
            }            
        } catch (error) {
            console.log(error)
            
        }

        useEffect(()=>{
            navigate('/dashboard/recipes');
        },[handleSubmit])

        
    }

    return(
        <>
        <HeaderAdmin />
        <h1>Nueva Receta</h1>
        <form onSubmit={handleSubmit} className="formClass">
            <div className="formRow">
                <label>Tipo receta</label>
                <select required onChange={(e)=>setTipo(e.target.value)}>
                    <option value='desayuno'>Desayuno</option>
                    <option value='comida'>Comida</option>
                    <option value='cena'>Cena</option>
                </select>
            </div>
            <div className="formRow">
            <label>Titulo:</label>
            <textarea 
                value={titulo}
                onChange={(e)=>setTitulo(e.target.value)}
                required
            ></textarea>
            </div>
            <div className="formRow">
            <label>Ingredientes:</label>
            <textarea 
                value={ingredientes}
                onChange={(e)=>setIngredientes(e.target.value)}
                required
            ></textarea>
            </div>
            <div className="formRow">
            <label>Preparación</label>
            <textarea 
                value={preparacion}
                onChange={(e)=>setPreparacion(e.target.value)}
            ></textarea></div>
            <button type='submit'>Añadir</button>
        </form>
        </>
    )
}

export default NewRecipe