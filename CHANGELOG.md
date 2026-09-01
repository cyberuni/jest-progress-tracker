# jest-progress-tracker

## 3.1.0

### Minor Changes

- bf269ea: Support jest 30, and widen the supported jest range to 29 and 30.
  
  `run()` used to read `testPathPattern`, a string on jest's `GlobalConfig`. Jest 30
  replaced it with `testPathPatterns`, so on jest 30 a filtered run was never marked
  `filtered`. Both shapes are now accepted — the string, the array, and jest 30's
  `TestPathPatterns` object — so the flag is set on every jest line this package supports.
  
  The config parameter is no longer `Pick`ed out of `@jest/types`; it is an exported
  `ProgressReporterConfig` type. `@jest/types` is consequently no longer a dependency, and
  `@jest/test-result` and `jest-watcher` move from `^27` to `^29 || ^30`.
  
  The tarball also now ships the `ts/` sources alongside the compiled `cjs/` output. The
  compiled output itself is emitted by tsdown instead of `tsc`; the paths, the CommonJS
  format and the `exports.default` / `__esModule` interop shape are unchanged.

## 3.0.5

### Patch Changes

- 8c0c1b3: Publish through GitHub OIDC / npm trusted publishing instead of a long-lived `NPM_TOKEN`, and release with changesets instead of semantic-release. Repository metadata now points at `cyberuni/jest-progress-tracker`.
