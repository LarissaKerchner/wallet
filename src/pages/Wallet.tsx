import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

import './wallet.css';

function Wallet() {
  return (
    <div className="walletContainer">
      <div className="header-form">
        <Header />
        <WalletForm />
      </div>
      <Table />
    </div>
  );
}

export default Wallet;
