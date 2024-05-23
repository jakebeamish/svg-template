module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json', 'jsx'],
  };