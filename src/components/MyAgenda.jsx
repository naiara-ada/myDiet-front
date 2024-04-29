import { useDiet } from "../context/DietContext.jsx";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import CalendarApp from "./CalendarApp.jsx";

function MyAgenda (){
    const {token} = useDiet();
    const {id} = useParams();
    console.log(id)

   

    return(
        <>
            <Header id={id}/>
            <h1>MyAgenda</h1> 

            <CalendarApp />

        </>
    )
}

export default MyAgenda