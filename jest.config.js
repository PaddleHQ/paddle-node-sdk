/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text'],
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  cacheDirectory: process.env.JEST_CACHE_FOLDER || '/tmp/node-sdk/.jest-cache',
  moduleNameMapper: {
    '(.+)\\.js': '$1',
  },
  coveragePathIgnorePatterns: [
    '/src/types/',
    '__tests__',
    '/src/enums/',
    'operations',
    'index.ts',
    'src/notifications/types',
  ],
};

module.exports = config;
