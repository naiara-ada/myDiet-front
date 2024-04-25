import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function Mytracking (){
    const {state} = useLocation();
    const { vtoken} = state;
    const {id} = useParams();
    console.log(id)
   
    console.log('token', state)


   

    return(
        <h1>Mytracking</h1> 
    )
}

export default Mytracking