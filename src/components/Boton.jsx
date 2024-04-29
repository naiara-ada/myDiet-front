import {Link} from 'react-router-dom'
function Boton ({id, url, text}){
    console.log('url boton', url)
   
    return(
        <div className='botonClass'>
            <Link className='linkClass' to={url} state={{ text: text }}>{text}</Link>        
        </div>
    )
}

export default Boton