import { PencilLine } from 'lucide-react';
import { useState, useRef} from 'react';
import { useDiet } from "../context/DietContext.jsx";


function LineTracking ({item}){
    const {token} = useDiet();
    const [descripcion, setDescripcion] = useState(item.Descripcion)
    const [fecha, setFecha] = useState(item.Fecha.substring(0,10));
    const [hora, setHora] = useState(item.Hora_de_la_Cita)
    const [peso, setPeso] = useState(item.Peso)
    const [grasa, setGrasa] = useState(item.Grasa_Corporal);
    const idRef = useRef();
    const descripcionRef = useRef();
    const fechaRef = useRef();
    const horaRef = useRef();
    const pesoRef = useRef();
    const grasaRef = useRef();

    const handleUpdate = async()=>{
        const urlDiet = import.meta.env.VITE_URL+'updatetracking'
        console.log(urlDiet)
        const payload ={
            id: idRef.current.value,
            Descripcion: descripcionRef.current.value,
            Fecha: fechaRef.current.value,
            Hora_de_la_Cita: horaRef.current.value,
            Peso: pesoRef.current.value,
            Grasa: grasaRef.current.value,
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
                
                console.log('ok')
            }            
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='containerTracking'>
            <input type='text' value={item.id} ref={idRef} readOnly style={{width: '20px'}}/>
            <input type='text' 
                value={descripcion} 
                ref={descripcionRef} 
                onChange={(e)=>setDescripcion(e.target.value)}/>
            <input type='date' 
                value={fecha} 
                ref={fechaRef} 
                onChange={(e)=>setFecha(e.target.value)}/>
            <input type='time' 
                value={hora} 
                ref={horaRef} 
                onChange={(e)=>setHora(e.target.value)}/>
            <input type='text' style={{width: '40px'}}
                value={peso} 
                ref={pesoRef} 
                onChange={(e)=>setPeso(e.target.value)}/>
            <input type='text' style={{width: '40px'}}
                value={grasa} 
                ref={grasaRef} 
                onChange={(e)=>setGrasa(e.target.value)}/>
            <PencilLine size={18} color='blue' onClick={handleUpdate} style={{cursor: 'pointer'}}/>
        </div>
    )
}

export default LineTracking