import { PlusSquareIcon } from '@chakra-ui/icons';
import { Heading, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Link } from '@/components/link';
import { Loading } from '@/components/loading';
import { Seo } from '@/components/seo';
import { useAuthUser } from '@/features/auth';
import { JobsList, useJobs } from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';

const DashboardJobsPage = () => {
  const user = useAuthUser();

  const jobs = useJobs({
    params: {
      organizationId: user.data?.organizationId,
    },
  });

  if (jobs.isLoading) {
    return <Loading />;
  }
  if (!user.data) return null;

  return (
    <>
      <Seo title="Jobs" />
      <HStack
        mb="8"
        align="center"
        justify="space-between"
      >
        <Heading>Jobs</Heading>
        <Link
          href="/dashboard/jobs/create"
          variant="solid"
          icon={<PlusSquareIcon />}
        >
          Create Job
        </Link>
      </HStack>
      <JobsList
        jobs={jobs.data || []}
        organizationId={user.data.organizationId}
        isLoading={jobs.isLoading}
        type="dashboard"
      />
    </>
  );
};

DashboardJobsPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardJobsPage;
