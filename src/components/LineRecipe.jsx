import { PencilLine } from 'lucide-react';
import { useState, useRef} from 'react';

function LineRecipe ({item}){
    const [titulo, setTitulo] = useState(item.Titulo)
    const [ingredientes, setIngredientes] = useState(item.Ingredientes);
    const [preparacion, setPreparacion] = useState(item.Preparacion);
    const idRef = useRef();
    const tituloRef = useRef();
    const ingredienteRef = useRef();
    const preparacionRef = useRef();

    const handleUpdate = ()=>{
        console.log('idREf', idRef.current.value)
        console.log('tituloRef', tituloRef.current.value)
        console.log('ingredienteRef', ingredienteRef.current.value)
        console.log('preparacionRef', preparacionRef.current.value)
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
        <PencilLine onClick={handleUpdate}/>
         </div>
    )
}

export default LineRecipe