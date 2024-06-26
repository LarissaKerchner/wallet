import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../types';
import { deleteExpense } from '../redux/actions';

import './table.css';

function Table() {
  const { expenses } = useSelector((state: StateType) => state.wallet);
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(
                  expense.value * expense.exchangeRates[expense.currency].ask
                ).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  onClick={ () => dispatch(deleteExpense(expense.id)) }
                  data-testid="delete-btn"
                >
                  Excluir

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
