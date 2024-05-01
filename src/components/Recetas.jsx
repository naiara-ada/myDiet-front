import { X } from 'lucide-react';
import { useRef } from 'react';

function Recetas ({onClose, data}){
    const recetasRef = useRef()

    const closeRecetas = (e) =>{
        if(recetasRef.current === e.target){
            onClose();
        }
    }
    console.log('*****DATA RECETAS*****',data);
    return(
        <div ref={recetasRef} onClick={closeRecetas} className="fondoModal">
            <div className='modal'>
                <button onClick={onClose} className='botonModal'><X /></button>
                <div className='textModal'>
                    <h1>{data.Titulo}</h1>
                    <p>Ingredientes: {data.Ingredientes}</p>
                    <p>Preparación: {data.Preparacion} </p>
                </div>
            </div>
        </div>
    )
}

export default Recetas