import LoginPage from '@/pages/auth/login';
import {
  renderWithApp,
  screen,
  user,
  waitFor,
} from '@/testing/test-utils';

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));
describe('Login page', () => {
  it('should login the user into the dashboard', async () => {
    renderWithApp(<LoginPage />);

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    const passwordInput =
      screen.getByLabelText(/password/i);

    const submitButton = screen.getByRole('button', {
      name: /log in/i,
    });

    const credentials = {
      email: 'user1@test.com',
      password: 'password',
    };
    await user.type(emailInput, credentials.email);
    await user.type(passwordInput, credentials.password);
    user.click(submitButton);

    await waitFor(() => {
      expect(router.replace).toHaveBeenCalledWith(
        '/dashboard/jobs'
      );
    });
  });
});
