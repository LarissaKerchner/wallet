import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';

import App from '../App';

const inputEmail = 'email-input';
const inputPassword = 'password-input';

const user = userEvent.setup();
const loginCorreto = 'larissa@kerchner.com';
const senhaCorreta = '123456';
const loginIncorreto = 'larissakerchner.com';
const senhaIncorreta = '1234';

describe('Verificando a page Login', () => {
  test('Verificando a renderização do componente Login', async () => {
    renderWithRouterAndRedux(<App />);

    const titleElement = screen.getByText('TrybeWallet');
    const emailInputElement = screen.getByTestId(inputEmail);
    const passwordInputElement = screen.getByTestId(inputPassword);
    const submitButtonElement = screen.getByText('Entrar');

    expect(titleElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
  test('Envia o formulário', async () => {
    const { getByTestId, getByText } = renderWithRouterAndRedux(<App />);

    const emailInputElement = getByTestId(inputEmail);
    const passwordInputElement = getByTestId(inputPassword);
    const submitButtonElement = getByText('Entrar');

    await user.type(emailInputElement, loginCorreto);
    await user.type(passwordInputElement, senhaIncorreta);
    expect(submitButtonElement).toBeDisabled();

    await user.clear(emailInputElement);
    await user.clear(passwordInputElement);

    await user.type(emailInputElement, loginIncorreto);
    await user.type(passwordInputElement, senhaCorreta);
    expect(submitButtonElement).toBeDisabled();

    await user.clear(emailInputElement);
    await user.clear(passwordInputElement);
  });
  test('Verificar o envio do formulário', async () => {
    const { getByTestId, getByText, getByRole } = renderWithRouterAndRedux(<App />);

    const emailInputElement = getByTestId(inputEmail);
    const passwordInputElement = getByTestId(inputPassword);
    const submitButtonElement = getByText('Entrar');

    await user.type(emailInputElement, loginCorreto);
    await user.type(passwordInputElement, senhaCorreta);
    expect(submitButtonElement).toBeEnabled();

    await user.click(submitButtonElement);

    const minhaCarteira = getByRole('heading', { name: 'My wallet' });
    expect(minhaCarteira).toBeInTheDocument();
  });
});

describe('Verificando a page Wallet', () => {
  test('Verificando a renderização do componente Wallet', async () => {
    const { getByTestId, getByText, getByRole } = renderWithRouterAndRedux(<App />);

    const emailInputElement = getByTestId(inputEmail);
    const passwordInputElement = getByTestId(inputPassword);
    const submitButtonElement = getByText('Entrar');

    await user.type(emailInputElement, loginCorreto);
    await user.type(passwordInputElement, senhaCorreta);
    expect(submitButtonElement).toBeEnabled();

    await user.click(submitButtonElement);

    const minhaCarteira = getByRole('heading', { name: 'My wallet' });
    const email = getByTestId('email-field');
    const total = getByTestId('total-field');
    const headerCurrency = getByTestId('header-currency-field');

    expect(minhaCarteira).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(headerCurrency).toBeInTheDocument();

    const expensesTable = getByRole('table');
    expect(expensesTable).toBeInTheDocument();
  });
});
