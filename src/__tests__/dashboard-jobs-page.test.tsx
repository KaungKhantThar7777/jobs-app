import DashboardJobsPage from '@/pages/dashboard/jobs';
import { getUser } from '@/testing/mocks/utils';
import { testData } from '@/testing/test-data';
import {
  renderWithApp,
  checkTableValues,
  screen,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

jest.mock('@/features/auth', () => ({
  useAuthUser: () => ({ data: getUser() }),
}));

describe('Dashboard Jobs Page', () => {
  it('should render the jobs list', async () => {
    renderWithApp(<DashboardJobsPage />);

    await waitForLoadingToFinish();

    expect(screen.getByText(/jobs/i)).toBeInTheDocument();

    checkTableValues({
      container: screen.getByTestId('jobs-list'),
      data: testData.jobs,
      columns: ['department', 'location', 'position'],
    });
  });
});
