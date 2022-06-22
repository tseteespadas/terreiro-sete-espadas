module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.jsx',
    '!src/index.tsx',
    '!src/**/index.js',
    '!src/__tests__/**/*.{js,jsx,ts,tsx}',
    '!src/stories/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  setupFiles: [],
  setupFilesAfterEnv: [],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
};
