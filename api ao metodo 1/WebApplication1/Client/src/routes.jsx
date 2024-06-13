import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./Components/Login/Login"
import RegistrarUsuario from "./Components/RegistrarUsuario/RegistrarUsuario"
import MenuPrincipal from "./Components/MenuPrincipal/MenuPrincipal";
import CadastroProduto from "./Components/CadastroProduto/CadastroProduto";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" exact element={<Login/>}/>
                <Route path="/RegistrarUsuario" exact element={<RegistrarUsuario/>} />
                <Route path="/menuprincipal" exact element ={<MenuPrincipal/>}/>
                <Route path="/cadastroproduto" exact element={<CadastroProduto/>}/>
            </Routes>
        </BrowserRouter>
    );
}

