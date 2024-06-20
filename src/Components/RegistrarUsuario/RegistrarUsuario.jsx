import { useState } from "react";
import "./RegistrarUsuario.css"

const RegistrarUsuario = () => {

return ( 
  <div className="container-Registrar">
    <form> {/* Define handleSubmit para tratar o envio do formulário */}
     <h1>Registro de Conta</h1>
    <div className="input">
      <input
        type="text" 
        name="nome" 
        required
        placeholder="Digite nome"
      />
    </div>

    <div className="input">
      <input
        type="text" 
        name="sobrenome" 
        required
        placeholder="Digite sobrenome"
      />
    </div>

    <div className="input">
        <input
        type="email" 
        name="email" 
        required
        placeholder="Digite o email"
        />
    </div>
    <div className="input">
      <input
        type="password" 
        name="senha" 
        required
        placeholder="Digite uma senha"
      />
    </div>
    <div>
      {/* Botão para enviar o formulário */}
      <button type="submit">Enviar</button>
    </div>
    </form>  
  </div>
    );
};
export default RegistrarUsuario;