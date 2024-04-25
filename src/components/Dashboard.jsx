import { useLocation } from "react-router-dom";

function Dashboard (){
    const {state} = useLocation();
    console.log(state)

   

    return(
        <h1>Dashboard</h1> 
    )
}

export default Dashboard