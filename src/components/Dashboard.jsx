
import { useDiet } from "../context/DietContext.jsx";
import Boton from "./Boton.jsx";

function Dashboard (){
    const {token} = useDiet();
   
    return(
        <>
        
        <h1>Dashboard</h1> 
        <div className="btnContainer">
            <Boton url='/dashboard/users' text='Mis Pacientes'/>
            <Boton url='/dashboard/recipes' text='Recetas'/>
            <Boton url='/dashboard/diaries' text='Diarios'/>
            <Boton url='/dashboard/myagenda' text='Mi Agenda'/> 
            
        </div>
        </>
    )
}

export default Dashboard