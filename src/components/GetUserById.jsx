import { PencilLine } from 'lucide-react';
import {useState, useEffect} from 'react';
import { useDiet } from "../context/DietContext.jsx";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {fetchData} from '../middleware/middleware.js';
import HeaderAdmin from "./HeaderAdmin.jsx";

function getUserById (){
    const {token} = useDiet();
    const location = useLocation()
    const {text} = location.state
    const {id} = useParams();
    const [data, setData] = useState(null)
    const [nombre, setNombre] = useState(text)
    const [apellido, setApellido] = useState(text)
    const [correo, setCorreo] =useState(text)
    const [contraseña, setContraseña] = useState()
    const navigate =useNavigate();
    
    const urlGetUserById = import.meta.env.VITE_URL + `dashboard/users/${id}/getuserbyid`
    console.log(urlGetUserById);
    
    const handleUpdateUser = async() => {
        const urlUpdateUser = import.meta.env.VITE_URL + 'updateuser'
        const payload ={
            id: id,
            Nombre: nombre,
            Apellido: apellido,
            Correo: correo,
            Contraseña: contraseña,
        }
        try {
            const response = await fetch(urlUpdateUser, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json', 
                     authorization: 'Bearer ' + token
                },
                body: JSON.stringify(payload)
            })              
            if(response.ok){
                navigate(-1);
                console.log('ok')
            }            
        } catch (error) {
            console.log(error)
        }
    }


    
    const callFetchData = async () =>{
        const resData = await fetchData(token, urlGetUserById)
        console.log(resData)
        
        setNombre(resData.map(item => item.Nombre));             
        setApellido(resData.map(item => item.Apellido));           
        setCorreo(resData.map(item => item.Correo));
        setContraseña(resData.map(item => item.Contraseña))
        
        setData(resData)
    }
   
    useEffect(() => {       
       callFetchData()
      }, [])

    
    return (
        <>
        <HeaderAdmin />
        <h2>Update: {nombre}</h2>
        <div>
            <label>Nombre:</label>
            <input
                type='text'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            /> 
            <label>Apellido:</label>
            <input
                type='text'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <label>Email:</label>
            <input
                type='text'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                />
            <label>Contraseña:</label>
            <input  type='text' value={contraseña} readOnly/>
            <PencilLine size={18} color='blue' onClick={handleUpdateUser} style={{cursor: 'pointer'}}/>
        </div>
        </>
    )

}

export default getUserById