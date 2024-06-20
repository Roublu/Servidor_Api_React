import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./Components/Login/Login"
import RegistrarUsuario from "./Components/RegistrarUsuario/RegistrarUsuario"

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/RegistrarUsuario" element={<RegistrarUsuario/>} />
            </Routes>
        </BrowserRouter>
    );
}

