module.exports = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFiles: ["./jest.setup.mjs"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.mjs"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
