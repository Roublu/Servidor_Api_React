import "./MenuPrincipal.css";
import { Link } from "react-router-dom";

const MenuPrincipal = () => {

    return (
        <div className="container_main">

                <h1 className="style_h1">Nome da loja</h1>
               
            <div>
                <div>
                    <button className="button_main">CADASTRO DE PRODUTO</button>
                    <button className="button_main">ESTOQUE</button>
                    <button className="button_main">VENDA</button>
                </div>
                <div>
                    <button className="button_main">CLIENTES</button>
                    <button className="button_main">HISTÓRICO</button>
                    <button className="button_main">SUPORTE</button>
                </div>
               
                <div>
                    <button className="button_main">SAIR</button>
                </div>
            
            </div>
           
      </div>
    );   
};
export default MenuPrincipal;