import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from "react";

import Home from '../components/Home.jsx'
import Dashboard from '../components/Dashboard.jsx';
import User from '../components/User.jsx';
import Alldietary from '../components/Alldietary.jsx';
import Mytracking from '../components/Mytraking.jsx';
import MyAgenda from '../components/MyAgenda.jsx';
import Header from '../components/Header.jsx';


function RoutesApp (){
      const urlDiet = import.meta.env.VITE_URL
      const [data, setData] = useState(null)
           
      const fetchData = async () =>{
            try {
                  const response = await fetch(urlDiet);
                  const resData = await response.json();
                  
                  setData(JSON.parse(resData));
                  
                  


            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            fetchData()
          }, [])

              
    return (
        <Router>
           <div> 
                  
                  {data === null 
                  ? (<h2>cargando...</h2>)
                  :  
                        
                        <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/dashboard" element={<Dashboard />} /> 
                        <Route path={`/user/:id/alldietary/`} element={<Alldietary />} />                         
                        <Route path={`/user/:id/mytracking/`} element={<Mytracking />} />
                        <Route path={`/user/:id/myagenda/`} element={<MyAgenda />} />
                                                                  
                        </Routes>
                        }

            </div>
            </Router>
      )
}

export default RoutesApp