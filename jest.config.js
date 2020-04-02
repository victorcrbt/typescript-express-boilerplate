module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/app/**/*.(ts|js)'],
  coverageDirectory: './__tests__/coverage',
  coverageReporters: ['json', 'lcov'],
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
    'controllers/(.*)': '<rootDir>/src/app/controllers/$1',
    'models/(.*)': '<rootDir>/src/app/models/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-extended'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.{ts,js}'],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
};
