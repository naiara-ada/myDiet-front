import { PencilLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useState, useRef} from 'react';
import { useDiet } from "../context/DietContext.jsx";
import { useNavigate } from "react-router-dom";

function LineRecipe ({item, table}){
    const {token} = useDiet();
    const [titulo, setTitulo] = useState(item.Titulo)
    const [ingredientes, setIngredientes] = useState(item.Ingredientes);
    const [preparacion, setPreparacion] = useState(item.Preparacion);
    const idRef = useRef();
    const tituloRef = useRef();
    const ingredienteRef = useRef();
    const preparacionRef = useRef();
    const navigate = useNavigate();

    const handleDelete =async ()=> {
        const urlDeleteRecipe = import.meta.env.VITE_URL +'deleterecipe';
        console.log(urlDeleteRecipe);
        const payload ={
            id: idRef.current.value,
            Tabla: table,
        }
        console.log(payload)
        try {
            const response = await fetch(urlDeleteRecipe, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json', 
                     authorization: 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            })
              
            if(response.ok){
                navigate('/dashboard/recipes');
            }            
        } catch (error) {
            console.log(error)
        }
    }


    const handleUpdate = async ()=>{
        const urlDiet = import.meta.env.VITE_URL+ 'dashboard/recipes/updaterecipe'
        console.log(urlDiet)
        const payload={ 
            id: idRef.current.value,
            Titulo: tituloRef.current.value,
            Ingredientes: ingredienteRef.current.value,
            Preparacion: preparacionRef.current.value,
            Tabla: table
         }
         console.log(payload)
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
                navigate('/dashboard/recipes');
            }            
        } catch (error) {
            console.log(error)
        }
    }
   
    return(
        <div  className='containerRecipes' key={item.id}>
            <input type='text' value={item.id} readOnly ref={idRef}/>
            <textarea
             ref={tituloRef} 
             value={titulo} 
             onChange={(e) => setTitulo(e.target.value) }></textarea>
          <textarea
            ref={ingredienteRef}
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)} ></textarea>
            <textarea
             ref={preparacionRef}
             value={preparacion}
             onChange={(e)=>setPreparacion(e.target.value)}></textarea>
            <button><PencilLine className='iconClass' size={18} color='#1c7bad' onClick={handleUpdate}/></button>
            <button><Trash2 className='iconClass' size={18} color='#1c7bad' onClick={handleDelete}/></button>
         </div>
    )
}

export default LineRecipe