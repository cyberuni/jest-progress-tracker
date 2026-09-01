// The repo runs its own built reporter over its own test run — `cjs/index.js` is the
// package's published entry point, so `test` and `coverage` depend on `build`.
module.exports = {
	reporters: ['default', '<rootDir>/cjs/index.js'],
	roots: ['<rootDir>/ts'],
	testEnvironment: 'node',
	collectCoverageFrom: ['ts/**/*.ts', '!ts/**/*.spec.ts', '!ts/testResultsExamples.ts'],
	coverageReporters: ['text', 'lcov'],
	// Set to what the suite already meets, so a regression fails the build instead of
	// quietly reporting a lower number.
	coverageThreshold: {
		global: { statements: 95, branches: 90, functions: 95, lines: 95 }
	},
	watchPlugins: [
		['jest-watch-suspend'],
		['jest-watch-toggle-config', { setting: 'verbose' }],
		['jest-watch-toggle-config', { setting: 'collectCoverage' }]
	]
}
