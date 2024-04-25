import {Link} from 'react-router-dom'
function Header (){


    return(
        <>
            <Link  to='/'>HOME</Link>
            <Link  to='/user/:id/alldietary'>Mis Dietas</Link>
            <Link  to='/user/:id/mytracking'>Mi seguimiento</Link>
            <Link  to='/user/:id/myagenda'>Mi agenda</Link>
        </>

    )

}

export default Header