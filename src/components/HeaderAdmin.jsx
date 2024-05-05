import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/img/logo.png'

function HeaderAdmin () {
    const navigate = useNavigate();

    return(
        <>
            <div className='containerHeader'>
                <img className='logoHome' src={logo} alt='Mis dietas'/>
                <nav className='navClass'>                
                    <button><Link className='linkClass' to='/dashboard'>Dashboard</Link></button>
                    <button><Link  className='linkClass'to='/dashboard/users'>Mis Pacientes</Link></button>
                    <button><Link className='linkClass' to='/dashboard/recipes'>Recetas</Link></button>
                    <button><Link className='linkClass' to='/dashboard/diaries'>Diarios</Link></button>
                    <button><Link className='linkClass' to='/dashboard/agenda'>Agenda</Link></button>
                    <button> <Link className='linkClass'  to='/'>LogOut</Link></button>
                    <button onClick={()=> navigate(-1)}>Volver</button>
                </nav>
            </div>

        </>
    )
}

export default HeaderAdmin