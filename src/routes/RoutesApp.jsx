import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from "react";

import Home from '../components/Home.jsx'
import Dashboard from '../components/Dashboard.jsx';
import User from '../components/User.jsx';
import Alldietary from '../components/Alldietary.jsx';
import Mytracking from '../components/Mytracking.jsx';
import MyAgenda from '../components/MyAgenda.jsx';
import Header from '../components/Header.jsx';
import Dietary from '../components/Dietary.jsx';
import GetUsers from '../components/GetUsers.jsx';
import NewUser from '../components/NewUser.jsx';
import GetRecipes from '../components/GetRecipes.jsx';
import UserTracking from '../components/UserTraking.jsx';
import NewRecipe from '../components/NewRecipe.jsx';


function RoutesApp (){
                      
    return (
        <Router>
           <div>                                                
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/dashboard" element={<Dashboard />} /> 
                  <Route path={`/user/:id/alldietary/`} element={<Alldietary />} />
                  <Route path={`/user/:id/alldietary/:id_plan`} element={<Dietary />} />                         
                  <Route path={`/user/:id/mytracking/`} element={<Mytracking />} />
                  <Route path={`/user/:id/myagenda/`} element={<MyAgenda />} />
                  <Route path={`/dashboard/users`} element={<GetUsers />} />
                  <Route path={`/dashboard/users/:id`} element={<UserTracking />} />
                  <Route path='/dashboard/recipes' element={<GetRecipes />} />
                  <Route path='/dashboard/recipes/newrecipe' element={<NewRecipe />} />
                  <Route path={`/dashboard/users/newuser`} element={<NewUser />} />

                                                      
            </Routes>
                        

            </div>
            </Router>
      )
}

export default RoutesApp