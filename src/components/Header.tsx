import { useSelector } from 'react-redux';
import { FaUser, FaCoins } from 'react-icons/fa';
import { StateType } from '../types';

import './header.css';

function Header() {
  const { email } = useSelector((state: StateType) => state.user);
  const { expenses } = useSelector((state: StateType) => state.wallet);

  function totalExpenses() {
    return expenses.reduce((acc, curr) => {
      return acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask);
    }, 0).toFixed(2);
  }

  return (
    <div className="hearderContainer">
      <div className="titulo">
        <h3>TrybeWallet</h3>
        <h4>My wallet</h4>
      </div>
      <div className="coin">
        <p data-testid="total-field">
          <FaCoins />
          {' '}
          {totalExpenses()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
      <p data-testid="email-field">
        <FaUser />
        {' '}
        {email}
      </p>
    </div>
  );
}

export default Header;
