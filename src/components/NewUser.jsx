import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase.js';
import { useDiet } from "../context/DietContext.jsx";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin.jsx";

function NewUser (){
    const {token} = useDiet();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const urlAdmin = import.meta.env.VITE_URL+'dashboard/users/newuser'

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, correo, password)
            const user = userCredential.user
            
            if (user){
                const payload ={
                    Nombre: nombre,
                    Apellido: apellido,
                    Contraseña: password,
                    Correo: correo,
                    Rol_Usuario: 'Usuario'
                }
                const response = await fetch(urlAdmin, {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json', 
                         authorization: 'Bearer ' + token
                    },
                    body: JSON.stringify(payload)
                })
                if(response.ok) {
                    const data = await response.json()
                    navigate(-1)
                  } 

            }
            
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
        <HeaderAdmin />
        <div className="containerAgenda">
         <h2>Nuevo usuario</h2>
         <form onSubmit={handleSubmit} className="formClass containerHome">
            <label  className="labelform">Nombre</label>
            <input 
                type='text'
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                required
            />
            <label className="labelform">Apellido</label>
            <input 
                type='text'
                value={apellido}
                onChange={(e)=> setApellido(e.target.value)}
                required
            />
            <label className="labelform">Correo</label>
            <input 
                type='email'
                value={correo}
                onChange={(e)=> setCorreo(e.target.value)}
                required
            />
            <label className="labelform">Contraseña</label>
            <input 
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
            />
            <button className='btnLink form' type='submit'>Añadir</button>
         </form>
         </div>
         
        </>
    )
}

export default NewUser