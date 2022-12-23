import PublicOrganizationPage, {
  getServerSideProps,
} from '@/pages/organizations/[organizationId]';
import { testData } from '@/testing/test-data';
import {
  renderWithApp,
  checkTableValues,
  screen,
} from '@/testing/test-utils';

const organization = testData.organizations[0];

const jobs = testData.jobs.filter(
  (job) => job.status === 'publish'
);

describe('Public Organization Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        organizationId: organization.id,
      },
    } as any);

    expect(props.organization).toEqual(organization);
    expect(props.jobs).toEqual(jobs);
  });

  it('should render organization details', async () => {
    renderWithApp(
      <PublicOrganizationPage
        jobs={jobs}
        organization={organization}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: organization.name,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: organization.email,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: organization.phone,
      })
    ).toBeInTheDocument();

    checkTableValues({
      data: jobs,
      columns: ['department', 'location', 'position'],
      container: screen.getByTestId('jobs-list'),
    });
  });

  it('should render the not found message if the organization is not found', async () => {
    renderWithApp(
      <PublicOrganizationPage
        organization={null}
        jobs={[]}
      />
    );

    const notFoundMessage =
      screen.getByText(/not found/i);

    expect(notFoundMessage).toBeInTheDocument();
  });
});
