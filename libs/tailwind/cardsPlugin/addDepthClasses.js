'use strict';
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
exports.__esModule = true;
var createDepths_1 = require('./createDepths');
/**
 * Creates depth classes based on color inputs, adds those classes as components to tailwind and returns classNames for further application.
 * The side effect here is that all of the depth classes remain in Tailwind until purge so they can be used for different components.
 *
 * @param param object with tailwind component function options passed from parent function, as well as normalized color
 *
 * @returns updated variants object with added depths: {fill, transparent} for each entry
 */
var addDepthClasses = function (_a) {
  var addComponents = _a.addComponents,
    theme = _a.theme;
  var variants = __assign(
    {
      white: {
        base: '#FFFFFF',
        shadow: '#D5DFE9',
      },
    },
    theme('cards.variants')
  );
  var depth = theme('cards.depth') || [2, 7];
  var background = theme('cards.background') || 'black';
  var skew = theme('cards.skew') || 1;
  var components = {};
  Object.keys(variants).forEach(function (color) {
    var _a;
    var _b = variants[color],
      base = _b.base,
      shadow = _b.shadow;
    var fillTuple = [color + '-shadow', shadow];
    var transparentTuple = [color + '-transparent', base];
    var backgroundTuple = ['background', background];
    var depthFillClasses = createDepths_1['default'](
      depth,
      fillTuple,
      null,
      skew
    );
    var depthTransparentClasses = createDepths_1['default'](
      depth,
      transparentTuple,
      backgroundTuple,
      skew
    );
    var returnClasses = {};
    // get names of newly created classes
    var fillClassName = Object.keys(depthFillClasses)[0];
    var transparentClassName = Object.keys(depthTransparentClasses)[0];
    returnClasses[fillClassName] = depthFillClasses[fillClassName];
    returnClasses[transparentClassName] =
      depthTransparentClasses[transparentClassName];
    // add classes nested under skew
    returnClasses['.skew .card-' + color] = depthFillClasses['under_skew'];
    returnClasses['.skew .card-' + color + '-transparent'] =
      depthTransparentClasses['under_skew'];
    // add newly created depth components to tailwind
    addComponents(returnClasses);
    // add classnames to return object under appropriate color name
    components = __assign(
      __assign({}, components),
      ((_a = {}),
      (_a[color] = __assign(__assign({}, variants[color]), {
        depths: {
          fill: fillClassName,
          transparent: transparentClassName,
        },
      })),
      _a)
    );
  });
  return components;
};
exports['default'] = addDepthClasses;
