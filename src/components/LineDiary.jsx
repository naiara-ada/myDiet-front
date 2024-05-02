import { PencilLine } from 'lucide-react';
import { useState, useRef, useEffect} from 'react';
import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js';

function LineDiary ({item}){
    const {token} = useDiet();
    const [nombre, setNombre] = useState(item.Nombre);
    const idRef = useRef();
    const nombreRef = useRef();
    console.log('item desayuno', item.Desayuno_id)
    const [data, setData] = useState(null);
    const [optionsDesayuno, setOptionsDesayuno] = useState([]);
    const [selOptionDesayuno, setSelOptionDesayuno] = useState(item.Desayuno_id)
    const [optionsComida, setOptionsComida] = useState([]);
    const [selOptionComida, setSelOptionComida] = useState(item.Comida_id)
    const [optionsCena, setOptionsCena] = useState([]);
    const [selOptionCena, setSelOptionCena] = useState(item.Cena_id)

    const callFetchData = async () =>{
        const urlDiet = import.meta.env.VITE_URL+'dashboard/recipes'
        const resData = await fetchData(token, urlDiet);
        setData(resData)

        if(resData ){
            setOptionsDesayuno(resData[0].map(recipe => ({
                id: recipe.id,
                titulo: recipe.Titulo
            })));
            setOptionsComida(resData[1].map(recipe => ({
                id: recipe.id,
                titulo: recipe.Titulo
            })));
            setOptionsCena(resData[2].map(recipe => ({
                id: recipe.id,
                titulo: recipe.Titulo
            })));


        }
       
    }
    
    useEffect(() => {       
       callFetchData()
      }, [])

    const handleUpdate = async () =>{
        const urlDiet = import.meta.env.VITE_URL+'updatediary'

        const payload ={
            id: idRef.current.value,
            Nombre: nombre,
            Desayuno_id: selOptionDesayuno,
            Comida_id : selOptionComida,
            Cena_id: selOptionCena           
        }

        console.log('payload', payload)
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
        <>
         <div className='containerDiary'>
                <input type='text' value={item.id} readOnly ref={idRef} style={{width:'20px'}}/>
                <input type='text' ref={nombreRef}
                    value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                {data !== null && (
                    <div >
                        <div className='lineDiary'>
                            Desayuno: <select value={selOptionDesayuno} onChange={(e)=> setSelOptionDesayuno(e.target.value)}>
                                {optionsDesayuno.map(option => (
                                    <option key={option.id} value={option.id}>{option.titulo}</option>
                                ))}
                            </select>
                        </div>
                        <div className='lineDiary'> 
                            Comida: <select value={selOptionComida} onChange={(e)=> setSelOptionComida(e.target.value)}>
                                {optionsComida.map(option => (
                                    <option key={option.id} value={option.id}>{option.titulo}</option>
                                ))}
                            </select>
                        </div>
                        <div className='lineDiary'>
                            Cena: <select value={selOptionCena} onChange={(e)=> setSelOptionCena(e.target.value)}>
                                {optionsCena.map(option => (
                                    <option key={option.id} value={option.id}>{option.titulo}</option>
                                ))}
                            </select>
                        </div>


                    </div>
                )}
                <PencilLine className='iconClass' color='blue' onClick={handleUpdate}/>
                    
        </div>       
        
        
        </>
       
    )

}

export default LineDiary