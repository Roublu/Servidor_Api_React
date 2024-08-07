
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import api from './../../services/api';

const Login = () => {
  //Armazenar entradas do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Hisotrico de navegação
  const history = useNavigate();

  async function login(event) {
   event.preventDefault();
    const data = {
      email, password
   };

   try{
     const response = await api.post('/api/Usuario', data)
     localStorage.setItem('email', email)
     localStorage.setItem('token', response.data.token);
     localStorage.setItem('expiration', response.data.token);
     history('/menu/principal');

   }catch(error) {
      alert('O login  falhou ' + error)
   }
  }
 
  return (
    <div className="container">

      <form onSubmit={login}>

       <h1>Login</h1>

        <div className="input">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={ e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
          <button  type="submit">Login</button>
        </div>

        <div className="signup-link">
          <p>
            Não possui uma conta? <Link to="/registrar/usuario">Registrar</Link>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Login;