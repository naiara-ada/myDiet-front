import logo from '../assets/img/logo.png'
import { useLocation, useNavigate, Link } from 'react-router-dom';

function Header ({id}){
    const urlactual = useLocation();
    const navigate = useNavigate();
    return(
        <>
            <div className='containerHeader'>
            <img className='logoHome' src={logo} alt='Mis dietas'/>
            {urlactual.pathname !== '/' && (
                <nav className='navClass'>                    
                    <button><Link className='linkClass' to={`/user/${id}/alldietary`}>Planes Dietéticos</Link></button>
                    <button><Link className='linkClass' to={`/user/${id}/mytracking`}>Mi Seguimiento</Link></button>
                    <button><Link  className='linkClass' to={`/user/${id}/myagenda`}>Mi Agenda</Link></button>
                    <button><Link  className='linkClass' to='/'>LogOut</Link></button>
                    <button className='btnLink' onClick={()=> navigate(-1)}>Volver</button>
                </nav>
            )}
            </div>
            
        </>

    )

}

export default Header