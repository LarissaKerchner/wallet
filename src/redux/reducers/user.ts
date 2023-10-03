import { ActionEmail } from '../../types';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action: ActionEmail) {
  switch (action.type) {
    case 'USER_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
