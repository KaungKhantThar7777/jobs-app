import PublicJobPage, {
  getServerSideProps,
} from '@/pages/organizations/[organizationId]/jobs/[jobId]';
import { testData } from '@/testing/test-data';
import {
  render,
  renderWithApp,
  screen,
} from '@/testing/test-utils';

const job = testData.jobs[0];
const organization = testData.organizations[0];

describe('Public Job Page', () => {
  it('should use getServerSideProps that fetches and return the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        organizationId: organization.id,
        jobId: job.id,
      },
    } as any);

    expect(props.job).toEqual(job);
    expect(props.organization).toEqual(organization);
  });

  it('should render job details', () => {
    renderWithApp(
      <PublicJobPage
        job={job}
        organization={organization}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: job.position,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(job.department)
    ).toBeInTheDocument();
  });

  it('should render not found if the job does not exist', () => {
    const { rerender } = renderWithApp(
      <PublicJobPage job={null} organization={null} />
    );

    expect(
      screen.getAllByText(/not found/i).length
    ).toBeGreaterThan(0);

    rerender(
      <PublicJobPage job={job} organization={null} />
    );
    expect(
      screen.getByText(/not found/i)
    ).toBeInTheDocument();

    render(
      <PublicJobPage
        job={null}
        organization={organization}
      />
    );
    expect(
      screen.getAllByText(/not found/i).length
    ).toBeGreaterThan(0);

    render(
      <PublicJobPage
        organization={organization}
        job={{ ...job, organizationId: '123' }}
      />
    );
    expect(
      screen.getAllByText(/not found/i).length
    ).toBeGreaterThan(0);
  });
});
