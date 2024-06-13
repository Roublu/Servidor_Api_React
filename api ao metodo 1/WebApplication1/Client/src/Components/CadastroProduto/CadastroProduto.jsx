import { useRef } from "react";
import "./CadastroProduto.css"
import { useNavigate } from "react-router-dom";


const CadastroProduto = () => {
  const formRef = useRef(null);

  //const navigate = useNavigate();
  //const  goToOtherPage = (path) => {navigate(path)};

  const returnPag = () => {
    const inputs = formRef.current.querySelectorAll('input');
    inputs.forEach(input => input.removeAttribute('required'));
    window.history.back();
  }

return ( 
  <div className="container-cadastro-produto">
    <form> {/* Define handleSubmit para tratar o envio do formulário */}
     <h1>Cadastro novo produto</h1>
    <div className="input-cadastro-produto">
      <input
        type="text" 
        name="nome" 
        //maxLength={20}
        required
        placeholder="Digite nome do produto"
      />
    </div>

    <div className="input-cadastro-produto">
      <input
        type="text" 
        name="codigo" 
        required
        placeholder="Código"
      />
    </div>

    <div className="input-cadastro-produto">
        <input
        type="number" 
        name="preco" 
        required
        placeholder="Preço"
        />
    </div>
    <div className="input-cadastro-produto">
      <input
        type="number" 
        name="Quantidade" 
        required
        placeholder="Quantidade"
      />
    </div>
    <div className="input-cadastro-produto">
      <input
        type="text" 
        name="Categoria" 
        required
        placeholder="Categoria"
      />
    </div>
    <div className="button-cadastrar">
      {/* Botão para enviar o formulário */}
      <button type="submit">Cadastrar Produto</button>
      <button onClick={returnPag}>Retorna</button>
    </div>
    </form>  
  </div>
    );
};
export default CadastroProduto;