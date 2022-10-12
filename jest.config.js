/* eslint-disable max-lines */
module.exports = {
  rootDir: './',
  modulePaths: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  verbose: false,
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/tests/__mocks__/svg.js',
  },
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage/jest',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['src/App.test.js'],
  testPathIgnorePatterns: ['<rootDir>/src/App.test.js'],
  // TODO: we need to had more coverate threshold for other folder directory
  coverageThreshold: {},
  setupFiles: ['jest-canvas-mock'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.png|jpg|jpeg|otf|ttf|gif|css$': '<rootDir>/tests/__mocks__/fileTransform.js',
  },
  testURL: 'http://localhost',
  globals: {
    PRODUCTION: true,
    TEST: true,
    VERSION: '',
  },
  coverageReporters: ['text', 'lcov', 'cobertura', 'html'],
  reporters: ['default'],
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  watchPlugins: [
    ['jest-watch-toggle-config', { setting: 'verbose' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    'jest-watch-typeahead/filename',
  ],
};
