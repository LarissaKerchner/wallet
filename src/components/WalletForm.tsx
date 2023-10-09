import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, StateType } from '../types';
import { api, apiThunk } from '../redux/actions';

import './form.css';

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
  }, [dispatch]);

  return (
    <div>
      <form className="expense-form">
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Descrição da despesa
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ handleChange }
            data-testid="description-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="value">
            Valor
          </label>
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ handleChange }
            data-testid="value-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="currency" className="form-label">
            Moeda
          </label>
          <select
            id="currency"
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
        </div>

        <div className="form-group">
          <label htmlFor="method">
            Método de pagamento
          </label>
          <select
            id="method"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tag">
            Categoria da despesa
          </label>
          <select
            id="tag"
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
        </div>

        <button
          type="button"
          onClick={ handleAddExpense }
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}

export default WalletForm;
