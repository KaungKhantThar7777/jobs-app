import DashboardCreateJobPage from '@/pages/dashboard/jobs/create';
import {
  renderWithApp,
  screen,
  user,
  waitFor,
} from '@/testing/test-utils';

const router = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

const jobData = {
  position: 'Software Engineer',
  location: 'London',
  department: 'Engineering',
  info: 'lorem ipsum',
};

describe('Dashboard Create Job Page', () => {
  it('should create a new job', async () => {
    renderWithApp(<DashboardCreateJobPage />);

    const positionInput = screen.getByRole('textbox', {
      name: /position/i,
    });

    const departmentInput = screen.getByRole('textbox', {
      name: /department/i,
    });

    const locationInput = screen.getByRole('textbox', {
      name: /location/i,
    });

    const infoInput = screen.getByRole('textbox', {
      name: /info/i,
    });

    const submitButton = screen.getByRole('button', {
      name: /create/i,
    });

    await user.type(positionInput, jobData.position);
    await user.type(locationInput, jobData.location);
    await user.type(departmentInput, jobData.department);
    await user.type(infoInput, jobData.info);

    user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/job created!/i)
      ).toBeInTheDocument();
    });
  });
});
