import { IS_SERVER } from '@/config/constants';

import { seedDb } from './seed-db';

const initializeMocks = () => {
  if (IS_SERVER) {
    require('./server');
  } else {
    const { worker } = require('./browser');
    worker.start();
  }
  seedDb();
};

initializeMocks();
