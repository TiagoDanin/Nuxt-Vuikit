# Nuxt Vuikit

[![Travis](https://img.shields.io/travis/TiagoDanin/Nuxt-Vuikit.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Nuxt-Vuikit) [![Downloads](https://img.shields.io/npm/dt/nuxt-vuikit.svg?style=flat-square)](https://npmjs.org/package/nuxt-vuikit) [![Node](https://img.shields.io/node/v/nuxt-vuikit.svg?style=flat-square)](https://npmjs.org/package/nuxt-vuikit) [![Version](https://img.shields.io/npm/v/nuxt-vuikit.svg?style=flat-square)](https://npmjs.org/package/nuxt-vuikit) [![XO code style](https://img.shields.io/badge/code%20style-XO-red.svg?style=flat-square)](https://github.com/xojs/xo) 

Vuikit Module for Nuxt.js

![](screenshot.png)

## Installation

Module available through the [npm registry](https://www.npmjs.com/). It can be installed using the  [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) command line tools.

```sh
# NPM
npm install nuxt-vuikit --save
# Or Using Yarn
yarn add nuxt-vuikit
```

## Documentation

### Setup

- Add `nuxt-vuikit` to `modules` section of your `nuxt.config.js`

```js
{
	modules: [
		'nuxt-vuikit'
	],
	vuikit: {
		defaultTheme: true,
		icons: true
	}
}
```

### Module options

#### `defaultTheme`
Load UiKit3 default theme
- Default: `true`
- Type: `Boolean`

#### `icons`
Load UiKit3 icons
- Default: `true`
- Type: `Boolean`

## Tests

To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies

- [@vuikit/icons](https://ghub.io/@vuikit/icons): UIkit icons as Vue functional components
- [@vuikit/theme](https://ghub.io/@vuikit/theme): Vuikit default theme based on UIkit
- [debug](https://ghub.io/debug): small debugging utility
- [vuikit](https://ghub.io/vuikit): A responsive Vue UI library for web site interfaces based on UIkit

## Dev Dependencies

- [ava](https://ghub.io/ava): Testing can be a drag. AVA helps you get it done.
- [got](https://ghub.io/got): Simplified HTTP requests
- [nuxt](https://ghub.io/nuxt): A minimalistic framework for server-rendered Vue.js applications (inspired by Next.js)
- [vue](https://ghub.io/vue): Reactive, component-oriented view layer for modern web interfaces.
- [xo](https://ghub.io/xo): JavaScript happiness style linter ❤️

## Contributors

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Nuxt-Vuikit/issues). [List of all contributors](https://github.com/TiagoDanin/Nuxt-Vuikit/graphs/contributors).

## License

[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)