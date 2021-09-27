const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    preset: "@shelf/jest-mongodb",
    transform: tsjPreset.transform,
    coverageDirectory: "./coverage",
    testMatch: [
        "**/?(*.)+(spec).ts"
    ],
    collectCoverageFrom: [
        "src/**/*.ts"
    ],
    modulePathIgnorePatterns: [
        "src/index.ts"
    ],
    collectCoverage: true,
    resetMocks: true,
    clearMocks: true,
    watchPathIgnorePatterns: ['globalConfig'],
}