import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import {
  CreateUpdateJobForm,
  useJob,
} from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useNotifications } from '@/stores/notifications';

const DashboardUpdateJobPage = () => {
  const router = useRouter();
  const { showNotification } = useNotifications();
  const { data, isLoading } = useJob({
    jobId: router.query.jobId as string,
  });

  const onSuccess = () => {
    showNotification({
      title: 'Updated',
      type: 'success',
      message: 'Job updated!',
      duration: 5000,
    });
    router.push('/dashboard/jobs');
  };
  return (
    <>
      <Seo title="Update job" />
      <Heading mb="8">Update Job</Heading>
      <CreateUpdateJobForm
        onSuccess={onSuccess}
        job={data}
        isLoading={isLoading}
      />
    </>
  );
};

DashboardUpdateJobPage.getLayout = function (
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardUpdateJobPage;
