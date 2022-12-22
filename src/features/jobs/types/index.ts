import { Entity } from '@/types';

export type Job = Entity & {
  organizationId: string;
  position: string;
  info: string;
  location: string;
  department: string;
  status: string;
};

export type MutateJobData = Pick<
  Job,
  | 'position'
  | 'department'
  | 'location'
  | 'info'
  | 'status'
>;
