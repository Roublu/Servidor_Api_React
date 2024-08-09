import { useState } from "react";
import "./RegistrarUsuario.css"

const RegistrarUsuario = () => {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return ( 
  <div className="container-Registrar">
    <form> {}
     <h1>Registro de Conta</h1>
    <div className="input">
      <input
        type="text" 
        name="nome" 
        value={nome}
        onChange={e => setNome(e.target.value) }
        required
        placeholder="Digite nome"
      />
    </div>

    <div className="input">
      <input
        type="text" 
        name="sobrenome" 
        value={sobrenome}
        onChange={e => setSobrenome(e.target.value) }
        required
        placeholder="Digite sobrenome"
      />
    </div>

    <div className="input">
        <input
        type="email" 
        name="email" 
        value={email}
        onChange={e => setEmail(e.target.value) }
        required
        placeholder="Digite o email"
        />
    </div>
    <div className="input">
      <input
        type="password" 
        name="senha" 
        value={password}
        onChange={e => setPassword(e.target.value) }
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