export default {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    rootDir: ".",
    moduleNameMapper: {
      "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: [
      "<rootDir>/tests/unit/**/*.test.ts",
      "<rootDir>/tests/unit/**/*.test.tsx",
    ],
    coveragePathIgnorePatterns: ["<rootDir>/tests/"],
    setupFilesAfterEnv: ["<rootDir>/tests/utils/setupTests.ts"],
    coverageDirectory: "<rootDir>/test-results/coverage",
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputDirectory: "<rootDir>/test-results/tests",
          outputName: "unit-results.xml",
        },
      ],
    ],
  };
  