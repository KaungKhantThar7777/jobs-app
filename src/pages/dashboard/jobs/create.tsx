import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { CreateUpdateJobForm } from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useNotifications } from '@/stores/notifications';

const DashboardCreateJobPage = () => {
  const { showNotification } = useNotifications();
  const router = useRouter();

  const onSuccess = () => {
    showNotification({
      type: 'success',
      message: 'Job created!',
      duration: 5000,
      title: 'Success',
    });
    router.push(`/dashboard/jobs`);
  };
  return (
    <>
      <Seo title="Create Job" />
      <Heading mb="8">Create Job</Heading>
      <CreateUpdateJobForm onSuccess={onSuccess} />
    </>
  );
};

DashboardCreateJobPage.getLayout = function (
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardCreateJobPage;
