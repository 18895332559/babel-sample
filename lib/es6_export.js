'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

exports.a = a;
function a() {} // a.js


var b = 'xxx';
exports.b = b; // 这是ES6的写法，实际上就是{b:b}

setTimeout(function () {
  return exports.b = b = 'ooo';
}, 1000);
var c = exports.c = 100;