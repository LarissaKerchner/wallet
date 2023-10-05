import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ActionEmail = {
  type: string,
  payload: string
};

export type EmailState = {
  email: string
};

export type WalletState = {
  currencies: string[],
  expenses: Expense[],
};

export type StateType = {
  user: EmailState
  wallet: WalletState
};

export type Expense = {
  id: number;
  value: number;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: any;
};

export type Dispatch = ThunkDispatch<StateType, void, AnyAction>;
