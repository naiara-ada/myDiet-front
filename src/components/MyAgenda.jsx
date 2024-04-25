import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function MyAgenda (){
    const {state} = useLocation();
    const { vtoken} = state;
    const {id} = useParams();
    console.log(id)

   

    return(
        <h1>MyAgenda</h1> 
    )
}

export default MyAgenda