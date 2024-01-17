module.exports = {
  roots: ['<rootDir>/src'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
};
