import { defineConfig } from 'tsdown'

// The published surface is CommonJS at `cjs/`, one file per module, with declarations
// and source maps — `main: cjs/index.js`, `typings: cjs/index.d.ts`. Jest loads the
// reporter with `require()`, and the repo's own `jest.config.js` points at
// `<rootDir>/cjs/index.js`, so the paths and the format are a contract, not a
// preference. `unbundle` keeps the one-file-per-module shape `tsc` used to emit, and
// `outExtensions` stops tsdown moving the output to `.cjs` / `.d.cts`.
export default defineConfig({
	// `transformTestResults` is a second entry only so its `.d.ts` keeps being emitted:
	// `tsc` used to declare every file it compiled, and dropping a declaration for an
	// already-published path is a surface reduction for anyone deep-importing it.
	entry: ['ts/index.ts', 'ts/transformTestResults.ts'],
	format: 'cjs',
	outDir: 'cjs',
	unbundle: true,
	dts: true,
	// tsdown rewrites a default export to `module.exports = X`, which drops the
	// `exports.default` / `__esModule` shape `tsc` emitted and every published version
	// so far has carried. Anyone doing `require('jest-progress-tracker').default` would
	// break. Keep the interop shape.
	cjsDefault: false,
	sourcemap: true,
	clean: true,
	target: 'node20',
	outExtensions: () => ({ js: '.js', dts: '.d.ts' })
})
