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

export type Currency = {
  code: string;
  name: string;
};

export type Expense = {
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
};

export type Dispatch = ThunkDispatch<StateType, void, AnyAction>;
