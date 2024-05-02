import { X } from 'lucide-react';
import { useRef } from 'react';

function Recetas ({onClose, data, id}){
    const recetasRef = useRef()
    console.log('id', id)
    console.log('data', data)

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
                    <h3>{data[id].Titulo}</h3>
                    <p>Ingredientes: {data[id].Ingredientes}</p>
                    <p>Preparación: {data[id].Preparacion} </p>
                </div>
            </div>
        </div>
    )
}

export default Recetas