module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
};
