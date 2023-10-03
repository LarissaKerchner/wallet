import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveEmail } from '../redux/actions';

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
    <form onSubmit={ handleSubmitLogin }>
      <h1>TrybeWallet</h1>
      <input
        type="email"
        name="email"
        value={ email }
        placeholder="Email"
        onChange={ (event) => setEmail(event.target.value) }
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
        data-testid="password-input"
      />
      <button
        type="submit"
        disabled={ isValidate }
      >
        Entrar

      </button>
    </form>
  );
}

export default Login;
