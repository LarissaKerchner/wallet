import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, StateType } from '../types';
import { api, apiThunk } from '../redux/actions';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const currencies = useSelector((state: StateType) => state.wallet.currencies);

  const [formData, setFormData] = useState({
    description: '',
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });

  const { description, value, currency, method, tag } = formData;

  function handleChange({ target }: any) {
    const { name, value: form } = target;
    setFormData({ ...formData, [name]: form });
  }

  function handleAddExpense() {
    dispatch(api(formData));

    setFormData({
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  useEffect(() => {
    dispatch(apiThunk());
  }, []);

  return (
    <div>
      <form>
        <label>
          Descrição da despesa
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ handleChange }
            data-testid="description-input"
          />
        </label>
        <label>
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            onChange={ handleChange }
            data-testid="value-input"
          />
        </label>
        <label>
          Moeda
          <select
            data-testid="currency-input"
            value={ currency }
            name="currency"
            onChange={ handleChange }
          >
            {currencies.map((moeda, index) => (
              <option key={ index } value={ moeda }>
                {moeda}
              </option>
            ))}
          </select>
        </label>
        <label>
          Método de pagamento
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label>
          Categoria da despesa
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ handleAddExpense }>Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
