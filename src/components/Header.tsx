import { useSelector } from 'react-redux';
import { StateType } from '../types';

function Header() {
  const { email } = useSelector((state: StateType) => state.user);
  return (
    <div>
      <h3>TrybeWallet</h3>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
