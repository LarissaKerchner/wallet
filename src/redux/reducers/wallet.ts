import { AnyAction } from 'redux';
import { CURRENCY_FETCH, ADD_EXPENSE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case CURRENCY_FETCH:
      return {
        ...state,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense: any) => expense.id !== action.payload),
      };
    default:
      return state;
  }
}

export default walletReducer;
