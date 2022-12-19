import DashboardJobPage from '@/pages/dashboard/jobs/[jobId]';
import { testData } from '@/testing/test-data';
import {
  renderWithApp,
  waitForLoadingToFinish,
  screen,
} from '@/testing/test-utils';

const job = testData.jobs[0];

const router = {
  query: {
    jobId: job.id,
  },
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

describe('Dashboard Job Page', () => {
  it('should renders all the job details', async () => {
    renderWithApp(<DashboardJobPage />);

    await waitForLoadingToFinish();

    const jobPosition = screen.getByRole('heading', {
      name: job.position,
    });

    const jobInfo = screen.getByText(job.info);

    expect(jobPosition).toBeInTheDocument();
    expect(jobInfo).toBeInTheDocument();
  });
});
