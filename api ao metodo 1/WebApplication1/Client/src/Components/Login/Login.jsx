
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
//import api from "../../../../../Client/api";


const Login = () => {
  //Armazenar entradas do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login(e){
    e.preventDefault();

    const data = {
      email, password
    };

   /* try{
      const response = await api.post('', data);
      localStorage.setItem('email', email);
      localStorage.setItem('accesToken', response.data.accessToken);
      
    }catch(error){
      alert('Erro no login. Tente novamente');
    } 
      */
  }
 
  return (
    <div className="container">
      <form>
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
          <Link to="/principal">Login</Link>        
        </div>
        <div className="signup-link">
          <p>
            Não possue uma conta? <Link to="/RegistrarUsuario">Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;