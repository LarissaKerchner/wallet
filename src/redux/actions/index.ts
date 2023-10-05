import { Dispatch } from 'redux';
import { ActionEmail } from '../../types';
import { fetchCurrency } from '../../services/APIcurrenry';

export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCY_FETCH = 'CURRENCY_FETCH';

export function saveEmail(email: string): ActionEmail {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}

export const currencySuccess = (currencies: string[]) => ({
  type: 'CURRENCY_FETCH',
  payload: currencies,
});

export const addExpense = (expense: any) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});

export const api = (form: any) => {
  return async (dispatch: Dispatch) => {
    const response = await fetchCurrency();
    const newEspense = { ...form, exchangeRates: response };
    dispatch(addExpense(newEspense));
  };
};

export const apiThunk = () => async (dispatch: Dispatch) => {
  const response = await fetchCurrency();
  const currencies = Object.keys(response);
  dispatch(currencySuccess(currencies));
};
