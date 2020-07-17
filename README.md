## @webboot/magic-theme

the [@magic-theme](https://magic-themes.github.io/) for @webboot.
shared between all @webboot pages to get a unified color scheme and page layout

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@webboot/magic-theme.svg
[npm-url]: https://www.npmjs.com/package/@webboot/magic-theme
[travis-image]: https://img.shields.io/travis/com/webboot/magic-theme/master
[travis-url]: https://travis-ci.com/webboot/magic-theme
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/docs/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicthemes/docs/branch/master
[coveralls-image]: https://coveralls.io/repos/github/webboot/magic-theme/badge.svg
[coveralls-url]: https://coveralls.io/github/webboot/magic-theme
[greenkeeper-image]: https://badges.greenkeeper.io/webboot/magic-theme.svg
[greenkeeper-url]: https://badges.greenkeeper.io/webboot/magic-theme.svg
[snyk-image]: https://snyk.io/test/github/webboot/magic-theme/badge.svg
[snyk-url]: https://snyk.io/test/github/webboot/magic-theme

#### install:
```bash
npm install --save --save-exact @webboot/magic-theme
```

#### usage:

##### import:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: '@webboot/magic-theme',

  // multiple themes
  // THEME: [...other themes, '@webboot/magic-theme'],
}
```

@magic will then import and use the theme automagically.

#### changelog

##### 0.0.1
first release

##### 0.0.2
remove margin 0 from .Menu on tablet width

##### 0.0.3
this theme now extends @magic-themes/project.

##### 0.0.4
export state from theme.

##### 0.0.5
bump required node version to 14.2.0

##### 0.0.6 
add NoSpy styles

##### 0.0.7 - unreleased
...
