import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveEmail } from '../redux/actions';

import './login.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isValidate = !(isValidateEmail && password.length >= 6);

  function handleSubmitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(saveEmail(email));
    navigate('/carteira');
  }

  return (
    <div className="paginaInicial">
      <form onSubmit={ handleSubmitLogin } className="formContainer">
        <section className="sectionLogin">
          <h1 className="custom-heading">
            Trybe
            <span>Wallet</span>
          </h1>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ (event) => setEmail(event.target.value) }
            className="inputLogin"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
            className="inputLogin"
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ isValidate }
          >
            Entrar

          </button>
        </section>
      </form>
    </div>
  );
}

export default Login;
