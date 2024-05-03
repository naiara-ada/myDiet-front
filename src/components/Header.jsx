import {Link} from 'react-router-dom'
import { useDiet } from '../context/DietContext.jsx'
import { useLocation, useParams } from 'react-router-dom';

function Header ({id}){
    const urlactual = useLocation();
    return(
        <>
            {urlactual.pathname !== '/' && (
                <nav className='navClass'>
                    
                    <Link to={`/user/${id}/alldietary`}>Mis Dietas</Link>
                    <Link  to={`/user/${id}/mytracking`}>Mi seguimiento</Link>
                    <Link  to={`/user/${id}/myagenda`}>Mi agenda</Link>
                    <Link  to='/'>LogOut</Link>
                </nav>
            )}
            
            
        </>

    )

}

export default Header