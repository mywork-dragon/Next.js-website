var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
// creates CSS box shadow property to simulate 3d depth (works only for -x == y)
var addDepth = function (depth, colorOuter, colorInner) {
  var inner = [];
  var outer = [];
  for (var i = 1; i <= depth; i++) {
    if (colorInner) {
      inner.push('-' + i + 'px ' + i + 'px 0 -1px ' + colorInner);
    }
    outer.push('-' + i + 'px ' + i + 'px ' + colorOuter);
  }
  return __spreadArrays(inner, outer).join(', ').concat(';');
};
/**
 *  creates depths classes with given depth, and colors
 *  single color -> adds depth
 *  both colors -> creates depth with color1 outline and color2 fill
 */
var createDepths = function (depthTuple, color1, color2) {
  var _a;
  var depthKey = depthTuple[0],
    depthPx = depthTuple[1];
  var colorKey1 = color1[0],
    colorString1 = color1[1];
  var colorKey2 = color2[0],
    colorString2 = color2[1];
  var componentStyles = {
    position: 'relative',
    boxSizing: 'border-box',
    left: depthPx,
  };
  return (
    (_a = {}),
    (_a['.depth-' + depthKey + '-' + colorKey1] = __assign(
      __assign({}, componentStyles),
      { boxShadow: addDepth(depthPx, colorString1) }
    )),
    (_a[
      '.depth-' + depthKey + '-' + colorKey1 + '-' + colorKey2
    ] = __assign(__assign({}, componentStyles), {
      border: '1px solid ' + colorString1,
      boxShadow: addDepth(depthPx, colorString1, colorString2),
    })),
    _a
  );
};
// export plugin function
module.exports = function (_a) {
  var addComponents = _a.addComponents,
    theme = _a.theme;
  var themeDepths = theme('depths');
  var themeColors = theme('colors');
  var components = {};
  var colors = {};
  iterateDeep(themeColors, function (color, pathTo) {
    var index = pathTo.join('-');
    colors[index] = color;
  });
  Object.keys(themeDepths).forEach(function (depthKey) {
    Object.keys(colors).forEach(function (colorKey1) {
      Object.keys(colors).forEach(function (colorKey2) {
        if (colorKey1 != colorKey2) {
          var depthTuple = [depthKey, themeDepths[depthKey]];
          var colorTuple1 = [colorKey1, colors[colorKey1]];
          var colorTuple2 = [colorKey2, colors[colorKey2]];
          components = __assign(
            __assign({}, components),
            createDepths(depthTuple, colorTuple1, colorTuple2)
          );
        }
      });
    });
  });
  addComponents(components);
};
