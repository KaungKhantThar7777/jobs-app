const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: [
    '<rootDir>/src/testing/setup-tests.ts',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/code-stages/',
  ],
  global: {
    IS_REACT_ACT_ENVIRONMENT: true,
  },
};

module.exports = createJestConfig(customJestConfig);
