module.exports = {
  verbose: true,
  browser: false,
  testEnvironment: 'node',
  reporters: ['default', './node_modules/jest-html-reporter'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  }
};
