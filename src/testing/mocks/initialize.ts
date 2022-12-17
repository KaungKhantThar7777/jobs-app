import { IS_SERVER } from '@/config/constants';

const initializeMocks = () => {
  if (IS_SERVER) {
    const { server } = require('./server');
    server?.listen();
  } else {
    const { worker } = require('./browser');
    worker?.start();
  }
};

initializeMocks();
