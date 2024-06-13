# pwix:jquery-ui

## What is it ?

A Meteor package which provides a patched stylesheet and a server-side snippet to work around the [#12524](https://github.com/meteor/meteor/issues/12524) Meteor issue.

## Rationale

Due to the above issue, any Meteor application or package which would take advantage of jQuery UI resources has to have a fixed route to the pages which use jQuery UI, and patch the stylesheet accordingly.

As described in the issue form, this package provides a work-around which works with any route, thus preventing the application or package to have to fix any route, thus being much more flexible.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:jquery-ui
```

## Usage

This package is expected to be `api.use()` by another application or package: you should not even have to explicitely install it. But you always can:

```sh
    meteor add pwix:jquery-ui
```

From the application (resp. package) point of view, it has just to include the jQuery UI javascript, says:

```js
    import 'jquery-ui/dist/jquery-ui.min.js';
```
and enjoy!

## Provides

This package automatically publishes the patched stylesheet and the corresponding `.png` icon files.

Please note that the jQuery UI package MUST have been installed at application level

```sh
    meteor npm install jquery-ui --save
```

## Configuration

None at the moment.

## NPM peer dependencies

Starting with v 1.0.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:

```js
    'jquery-ui': '^1.13.2'
```

Each of these dependencies MUST be installed at application level:

```sh
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-jquery-ui/issues).

---
P. Wieser
- Last updated on 2024, Jun. 13th
