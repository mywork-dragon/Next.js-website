'use strict';
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
exports.__esModule = true;
var isObject = function (input) {
  return Boolean(input) && !(input instanceof Array) && input instanceof Object;
};
/**
 * Works as depth first forEach on object with unlimited depths and primitive values on
 * deepest child nodes
 *
 * @param input input should be an object
 * @param callback function to callback with `value` of deepest child node on each branch and `pathTo` array
 * @param pathTo array of all nodes, starting node defaults to empty array but an object name can be passed as root node
 */
var iterateDeep = function (input, callback, pathTo) {
  if (pathTo === void 0) {
    pathTo = [];
  }
  if (isObject(input)) {
    Object.keys(input).forEach(function (key) {
      iterateDeep(input[key], callback, __spreadArrays(pathTo, [key]));
    });
  } else if (!(input instanceof Array)) {
    callback(input, pathTo);
  }
};
exports['default'] = iterateDeep;
