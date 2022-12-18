import { useQuery } from 'react-query';

import { apiClient } from '@/lib/api-client';

import { AuthUser } from '../types';

export const getAuthUser = (): Promise<AuthUser> => {
  return apiClient.get('/auth/me');
};

export const useAuthUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['auth-user'],
    queryFn: getAuthUser,
  });

  return {
    data,
    isLoading,
  };
};
