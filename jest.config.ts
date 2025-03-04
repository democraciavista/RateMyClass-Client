import type { Config } from 'jest';

const config: Config = {
    rootDir: './',
    testEnvironmentOptions: {
        customExportConditions: ['']
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/helper/setupTests.ts'],

    transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1' // ✅ Garante que os imports funcionem no Jest
    },

    testPathIgnorePatterns: ['/node_modules/', '/.next/'],

    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/index.ts'
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover']
};

export default config;
