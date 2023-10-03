import { ActionEmail } from '../../types';

export const USER_EMAIL = 'USER_EMAIL';

export function saveEmail(email: string): ActionEmail {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}
