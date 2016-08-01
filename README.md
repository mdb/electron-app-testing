[![Build Status](https://travis-ci.org/mdb/electron-app-testing.svg?branch=master)](https://travis-ci.org/mdb/electron-app-testing)

# electron-app-testing

A simple reference application demonstrating how to execute [spectron](http://electron.atom.io/spectron) functional
tests against an [electron](http://electron.atom.io) application build.

`electron-app-testing` also demonstrates a technique for [TravisCI CI configuration](https://github.com/mdb/electron-app-testing/blob/master/.travis.yml)
that exercises build/test functionality on both MacOS and Linux.

## Run the application

```
npm install
npm start
```

## Build the application for various OS/architectures

This creates builds for various OS/architectures to a `build` directory.

```
npm run build
```

## Execute electron tests against a build

Note that this detects the current OS/architecture and executes tests
against the corresponding build.

```
npm test
```
