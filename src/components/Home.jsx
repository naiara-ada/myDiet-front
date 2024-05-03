import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../config/firebase.js';
import { useNavigate } from "react-router-dom";
import { useDiet } from "../context/DietContext.jsx";

function Home (){
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const navigate = useNavigate();
    const {token, loginToken} = useDiet();
    auth.signOut();
        
    const signInEmail = async (e)=>{
    e.preventDefault();

    try {

        const userCredential = await signInWithEmailAndPassword(auth, inputEmail, inputPassword)
        const user = userCredential.user
        const ptoken = await user.getIdToken();
        loginToken(ptoken);
            
        //miramos si el correo es el administrador para ir a una sección u otra
        user.email === import.meta.env.VITE_EMAILADMIN ? navigate('/dashboard', {state:{vtoken:ptoken}} ) : navigate('/user')
        

        
    } catch (error) {
        console.log(error)
    }

    }
    
    return(
        <form>
             <label>Email</label>
            <input 
                type="email"
                id="email"
                name="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                required
            />
            <label>Password</label>
            <input 
                type="password"
                id="password"
                name="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                required
            />
            <button onClick={signInEmail}>Ingresar</button>
        </form>
    )
}

export default Home