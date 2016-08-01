[![Build Status](https://travis-ci.org/mdb/electron-app-testing.svg?branch=master)](https://travis-ci.org/mdb/electron-app-testing)

# electron-app-testing

A simple reference application demonstrating how to execute [spectron](http://electron.atom.io/spectron) functional
tests against an [electron](http://electron.atom.io) application build.

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
