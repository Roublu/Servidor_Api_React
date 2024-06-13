import "./MenuPrincipal.css";
import { useNavigate } from "react-router-dom";

const MenuPrincipal = () => {

    const navigate = useNavigate();
    const  goToOtherPage = (path) => {navigate(path)};

    return (
        <div className="container_main">

                <h1 className="style_h1">Nome da loja</h1>

            <div>
                <div>
                    <button className="button_main" onClick={goToOtherPage("/cadastroproduto")}>CADASTRO DE PRODUTO</button>
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