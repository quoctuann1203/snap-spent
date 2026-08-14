import type { LoginFormProps } from './login-form';

import * as React from 'react';

import { cleanup, screen, setup, waitFor } from '@/lib/test-utils';
import { LoginForm } from './login-form';

afterEach(cleanup);

const onSubmitMock: jest.Mock<LoginFormProps['onSubmit']> = jest.fn();

describe('loginForm', () => {
  it('renders correctly', async () => {
    setup(<LoginForm />);
    expect(await screen.findByTestId('email-input')).toBeOnTheScreen();
    expect(screen.getByTestId('password-input')).toBeOnTheScreen();
    expect(screen.getByTestId('login-button')).toBeOnTheScreen();
  });

  it('should display required error when values are empty', async () => {
    const { user } = setup(<LoginForm />);

    const button = screen.getByTestId('login-button');
    expect(screen.queryByText(/Email là bắt buộc/i)).not.toBeOnTheScreen();
    await user.press(button);
    expect(await screen.findByText(/Email là bắt buộc/i)).toBeOnTheScreen();
    expect(screen.getByText(/Mật khẩu là bắt buộc/i)).toBeOnTheScreen();
  });

  it('should display matching error when email is invalid', async () => {
    const { user } = setup(<LoginForm />);

    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(emailInput, 'yyyyy');
    emailInput.props.onBlur(); // Manually trigger blur to set touched state
    await user.type(passwordInput, 'test');
    await user.press(button);

    expect(await screen.findByText(/Email không hợp lệ/i)).toBeOnTheScreen();
    expect(screen.queryByText(/Email là bắt buộc/i)).not.toBeOnTheScreen();
  });

  it('should call LoginForm with correct values when values are valid', async () => {
    const { user } = setup(<LoginForm onSubmit={onSubmitMock} />);

    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(emailInput, 'youssef@gmail.com');
    await user.type(passwordInput, 'password');
    await user.press(button);
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
    expect(onSubmitMock).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'youssef@gmail.com',
        password: 'password',
      }),
    );
  });

  it('should toggle password visibility', async () => {
    const { user } = setup(<LoginForm />);

    const toggleButton = screen.getByTestId('password-input-toggle-visibility');
    expect(toggleButton).toBeOnTheScreen();

    // Password should be hidden by default (secureTextEntry)
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput.props.secureTextEntry).toBe(true);

    // Toggle to show password
    await user.press(toggleButton);
    expect(screen.getByTestId('password-input').props.secureTextEntry).toBe(false);

    // Toggle back to hide
    await user.press(toggleButton);
    expect(screen.getByTestId('password-input').props.secureTextEntry).toBe(true);
  });
});
