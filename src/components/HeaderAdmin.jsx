import {Link} from 'react-router-dom'

function HeaderAdmin () {

    return(
        <>
            <nav className='navClass'>                
                <button><Link className='linkClass' to='/dashboard'>Dashboard</Link></button>
                <button><Link  className='linkClass'to='/dashboard/users'>Mis Pacientes</Link></button>
                <button><Link className='linkClass' to='/dashboard/recipes'>Recetas</Link></button>
                <button><Link className='linkClass' to='/dashboard/diaries'>Diarios</Link></button>
                <button><Link className='linkClass' to='/dashboard/agenda'>Agenda</Link></button>
                <button> <Link className='linkClass'  to='/'>LogOut</Link></button>
            </nav>

        </>
    )
}

export default HeaderAdmin