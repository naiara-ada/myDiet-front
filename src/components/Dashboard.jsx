
import Boton from "./Boton.jsx";

function Dashboard (){
      
    return(
        <>
        
        <h1>Dashboard</h1> 
        <div className="btnContainer">
            <Boton url='/dashboard/users' text='Mis Pacientes'/>
            <Boton url='/dashboard/recipes' text='Recetas'/>
            <Boton url='/dashboard/diaries' text='Diarios'/>
            <Boton url='/dashboard/agenda' text='Mi Agenda'/> 
            
        </div>
        </>
    )
}

export default Dashboard