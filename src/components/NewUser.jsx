import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase.js';
import { useDiet } from "../context/DietContext.jsx";
import { useNavigate } from "react-router-dom";

function NewUser (){
    const {token} = useDiet();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const urlAdmin = 'http://localhost:3000/dashboard/users/newuser'

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, correo, password)
            const user = userCredential.user
            console.log(user)
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
                    console.log(data)
                    navigate('/dashboard/users')
                  } 

            }
            
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
         <h1>Nuevo usuario</h1>
         <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
                type='text'
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                required
            />
            <label>Apellido</label>
            <input 
                type='text'
                value={apellido}
                onChange={(e)=> setApellido(e.target.value)}
                required
            />
            <label>Correo</label>
            <input 
                type='email'
                value={correo}
                onChange={(e)=> setCorreo(e.target.value)}
                required
            />
            <label>Contraseña</label>
            <input 
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
            />
            <button type='submit'>Añadir</button>
         </form>
        </>
    )
}

export default NewUser