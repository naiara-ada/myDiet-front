import {Link} from 'react-router-dom'
import { useDiet } from '../context/DietContext.jsx'
import { useLocation, useParams } from 'react-router-dom';

function Header ({id}){
    const urlactual = useLocation();
    return(
        <>
            {urlactual.pathname !== '/' && (
                <nav className='navClass'>
                    
                    <button><Link className='linkClass' to={`/user/${id}/alldietary`}>Planes Dietéticos</Link></button>
                    <button><Link className='linkClass' to={`/user/${id}/mytracking`}>Mi Seguimiento</Link></button>
                    <button><Link  className='linkClass' to={`/user/${id}/myagenda`}>Mi Agenda</Link></button>
                    <button><Link  className='linkClass' to='/'>LogOut</Link></button>
                </nav>
            )}
            
            
        </>

    )

}

export default Header