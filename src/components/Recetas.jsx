import { X } from 'lucide-react';
import { useRef } from 'react';

function Recetas ({onClose, data}){
    const recetasRef = useRef()

    const closeRecetas = (e) =>{
        if(recetasRef.current === e.target){
            onClose();
        }
    }

    return(
        <div ref={recetasRef} onClick={closeRecetas} className="fondoModal">
            <div className='modal'>
                <button onClick={onClose} className='botonModal'><X /></button>
                <div className='textModal'>
                    <h1>{data.dias1[1].titulo}</h1>
                    <p>Ingredientes: {data.dias1[1].ingredientes}</p>
                    <p>Preparación: {data.dias1[1].preparacion} </p>
                </div>
            </div>
        </div>
    )
}

export default Recetas