# libmq
A simple Javascript media query library for web browsers.

[![coverage](https://img.shields.io/codecov/c/github/soulofmischief/libmq/master.svg?style=flat-square)](http://codecov.io/gh/soulofmischief/libmq?branch=master)
[![size](https://img.shields.io/bundlephobia/min/libmq.svg?style=flat-square)](https://www.npmjs.com/package/libmq)

## Install

```$ npm install libmq --save```

## About

This module runs media queries on either the window's width/height or a provided value. 

## Example

```js
import { query, screenWidths as w } from 'libmq'

if ( query.desktopUp()) 
  console.log( `Width is at least ${ w.desktopUp }`)

else if ( query.phoneOnly())
  console.log( `Width is no more than ${ w.phoneOnly }`)

if ( query.desktopUp( w.bigDesktopUp ))
  console.log( "This module isn't broken." )

```