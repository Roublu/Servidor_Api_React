
import {Route, BrowserRouter, Routes,} from "react-router-dom";

import Login from "./Components/Login/Login"
import RegistrarUsuario from "./Components/RegistrarUsuario/RegistrarUsuario"
import MenuPrincipal from "./Components/MenuPrincipal/MenuPrincipal"

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/registrar/usuario/" element={<RegistrarUsuario/>} />
                <Route path="/menu/principal" element={<MenuPrincipal/>}/>
            </Routes>
        </BrowserRouter>
    );
}

