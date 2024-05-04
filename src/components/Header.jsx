import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { useLocation, useParams } from 'react-router-dom';

function Header ({id}){
    const urlactual = useLocation();
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
                </nav>
            )}
            </div>
            
        </>

    )

}

export default Header