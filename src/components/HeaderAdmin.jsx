import {Link} from 'react-router-dom'

function HeaderAdmin () {

    return(
        <>
            <nav className='navClass'>
                <Link  to='/'>HOME</Link>
               <Link to='/dashboard'>Dashboard</Link>
               <Link to='/dashboard/users'>Mis Pacientes</Link>
               <Link to='/dashboard/recipes'>Recetas</Link>
               <Link to='/dashboard/diaries'>Diarios</Link>
            </nav>

        </>
    )
}

export default HeaderAdmin