module.exports = {
    verbose: true,
    setupFiles: [
        '<rootDir>/config/jest/shim.js',
    ],
    collectCoverageFrom: [
        'app/**/*.{js,jsx,ts,tsx}',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/config/jest/assetsTransformer.js',
        '^App[/](.+)$': '<rootDir>/app/$1',
    },
    testMatch: [
        '**/?(*.)(spec|test).js?(x)',
    ],
    transform: {
        '\\.js$': 'babel-jest',
    },
};
