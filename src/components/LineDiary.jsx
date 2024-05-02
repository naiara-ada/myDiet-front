import { PencilLine } from 'lucide-react';
import { useState, useRef, useEffect} from 'react';
import { useDiet } from "../context/DietContext.jsx";
import {fetchData} from '../middleware/middleware.js';

function LineDiary ({item}){
    const {token} = useDiet();
    const [nombre, setNombre] = useState(item.Nombre);
    const idRef = useRef();
    const nombreRef = useRef();
    const [data, setData] = useState(null)

    const callFetchData = async () =>{
        const urlDiet = import.meta.env.VITE_URL+'dashboard/recipes'
        const resData = await fetchData(token, urlDiet);
        console.log('getrecipes', resData)
        setData(resData)
    }
    
    useEffect(() => {       
       callFetchData()
      }, [])



    return(
        <div className='containerDiary'>
        <input type='text' value={item.id} readOnly ref={idRef} style={{width:'20px'}}/>
        <input type='text' ref={nombreRef}
            value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <select >
            
        </select>
        

        </div>
    )

}

export default LineDiary