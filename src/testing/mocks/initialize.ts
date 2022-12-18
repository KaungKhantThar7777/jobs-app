import { IS_SERVER } from '@/config/constants';

import { seedDb } from './seed-db';

let server: any;
let worker: any;
if (IS_SERVER) {
  server = require('./server').server;
} else {
  worker = require('./browser').worker;
}

const initializeMocks = () => {
  if (IS_SERVER) {
    server?.listen();
  } else {
    worker?.start();
  }

  seedDb();
};

initializeMocks();
