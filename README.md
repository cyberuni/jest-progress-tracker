# jest progress tracker

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![GitHub NodeJS][github-nodejs]][github-action-url]
[![Codecov][codecov-image]][codecov-url]

Track test progress for jest.

## Usage

To use `jest-progress-tracker`,
add it to the `reporters` section of the Jest configuration:

```js
{
  "jest": {
    "reporters": [
      "default", // using default reporter
      "jest-progress-tracker"
    ]
  }
}
```

[codecov-image]: https://codecov.io/gh/cyberuni/jest-progress-tracker/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/cyberuni/jest-progress-tracker
[downloads-image]: https://img.shields.io/npm/dm/jest-progress-tracker.svg?style=flat
[downloads-url]: https://npmjs.org/package/jest-progress-tracker
[github-nodejs]: https://github.com/cyberuni/jest-progress-tracker/workflows/release/badge.svg
[github-action-url]: https://github.com/cyberuni/jest-progress-tracker/actions
[npm-image]: https://img.shields.io/npm/v/jest-progress-tracker.svg?style=flat
[npm-url]: https://npmjs.org/package/jest-progress-tracker
