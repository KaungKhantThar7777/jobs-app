import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import {
  DataTable,
  DataTableProps,
} from '@/components/data-table';

import { Job } from '../../types';

type JobListType = 'dashboard' | 'public';

export type JobsListProps = {
  type: JobListType;
  jobs: Job[];
  isLoading?: boolean;
  organizationId: string;
};

const getTableColumns = (
  organizationId: string,
  type: JobListType
) => {
  const tableColumns: DataTableProps<Job>['columns'] = [
    {
      title: 'Position',
      field: 'position',
    },
    {
      title: 'Department',
      field: 'department',
    },
    {
      title: 'Location',
      field: 'location',
    },
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }) => {
        return type === 'dashboard' ? (
          <Link href={`/dashboard/jobs/${id}/update`}>
            Update
          </Link>
        ) : null;
      },
    },
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }) => {
        return (
          <Link
            href={
              type === 'public'
                ? `/organizations/${organizationId}/jobs/${id}`
                : `/dashboard/jobs/${id}`
            }
          >
            View
          </Link>
        );
      },
    },
  ];

  return tableColumns;
};

export const JobsList = ({
  jobs,
  organizationId,
  type,
  isLoading,
}: JobsListProps) => {
  const tableColumns = getTableColumns(
    organizationId,
    type
  );

  return (
    <Box data-testid="jobs-list">
      <DataTable
        columns={tableColumns}
        isLoading={isLoading || false}
        data={jobs}
      />
    </Box>
  );
};
