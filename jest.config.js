const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.(spec|test).[jt]s?(x)'], // Only match test files in the `test` directory
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore these folders
  collectCoverage: true,
  collectCoverageFrom: [
    'test/**/*.{ts,tsx}', // Only consider files in the `test` directory for coverage
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore irrelevant directories
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
};
