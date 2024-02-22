module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Set the test environment to jsdom
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
    '\\.(jpg|jpeg|png|gif|webp|svg|)$',
  ],

};
