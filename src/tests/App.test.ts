import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndRedux, renderWithRouter } from './helpers/renderWith';

import App from '../App';

describe('Verificando a page Login', () => {

  it('Verificando a renderização do componente', () => {
    renderWithRouter(<App />);

    const headingElement = screen.getByRole('heading', { name: /trybewallet/i });
    const emailInputElement = screen.getByTestId('email-input');
    const passwordInputElement = screen.getByTestId('password-input');
    const submitButtonElement = screen.getByRole('button', { name: /entrar/i });

    expect(headingElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });

});