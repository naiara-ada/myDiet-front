import {Link} from 'react-router-dom'

function HeaderAdmin () {

    return(
        <>
            <nav className='navClass'>
                
               <Link to='/dashboard'>Dashboard</Link>
               <Link to='/dashboard/users'>Mis Pacientes</Link>
               <Link to='/dashboard/recipes'>Recetas</Link>
               <Link to='/dashboard/diaries'>Diarios</Link>
               <Link to='/dashboard/agenda'>Agenda</Link>
               <Link  to='/'>LogOut</Link>
            </nav>

        </>
    )
}

export default HeaderAdmin