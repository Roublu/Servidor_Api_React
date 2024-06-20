
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  //Armazenar entradas do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Função é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    //Impede que a página seja recarregada
    event.preventDefault();
    fetch('COLOCAR HTTPS NA URL/dominio', { 
      method: 'POST', //Enviar dados
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({ email: 'email', password: 'password' }),
    })
    
    .then((response) => {
      if (response.ok) {
        console.log('Login bem-sucedido');
        //FAZER Redirecionamento pagina Principal
      } else {
        console.error('Erro no login');
      }
    })
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>

       <h1>Login</h1>

        <div className="input">
          <input
            type="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Senha"
            required
          />
        </div>

        <div className="recall">
          <label>
            <input 
              type="checkbox"
            />
            Lembre de min
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>

        <div className="signup-link">
          <p>
            Não possue uma conta? <Link to="/registrar/usuario/:usuarioid">Registrar</Link>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Login;