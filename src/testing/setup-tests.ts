import '@testing-library/jest-dom/extend-expect';

import { queryClient } from '@/lib/react-query';

import { seedDb } from './mocks/seed-db';
import { server } from './mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
  seedDb();
});

afterAll(() => server.close());

afterEach(async () => {
  queryClient.clear();
  server.resetHandlers();
});
