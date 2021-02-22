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
var addDepthClasses_1 = require('./addDepthClasses');
var addSubClasses_1 = require('./addSubClasses');
/**
 * Creates somewhat opinionated 3d card components
 * @param param0 object containing Tailwind plugin function parameters
 *
 */
var createCards = function (_a) {
  var addUtilities = _a.addUtilities;
  var variants = {
    white: {
      base: '#FFFFFF',
      shadow: '#D5DFE9',
    },
    gray: {
      base: '#D5DFE9',
      shadow: '#FFFFFF',
    },
    blue: {
      base: '#305EED',
      shadow: '#143DB0',
    },
    green: {
      base: '#53D084',
      shadow: '#25A055',
    },
    orange: {
      base: '#F2A143',
      shadow: '#CB7F27',
    },
  };
  var transformMatrix = 'matrix(0.73, -0.40, 0.8, 0.43, -5, -25)';
  // creates base subclasses as well as color variants
  addSubClasses_1['default']({ addUtilities: addUtilities });
  var componentsWithDepth = addDepthClasses_1['default']({
    variants: variants,
    addUtilities: addUtilities,
  });
  // create components
  var cardComponents = {
    '.skew': {
      transformStyle: 'preserve-3d',
      transform: transformMatrix,
    },
  };
  Object.keys(componentsWithDepth).forEach(function (variant) {
    var _a, _b;
    cardComponents['.card-' + variant] =
      ((_a = {
        backgroundColor: componentsWithDepth[variant].base,
      }),
      (_a['@apply ' + componentsWithDepth[variant].depths.fill.slice(1)] = {}),
      _a);
    cardComponents['.card-' + variant + '-transparent'] =
      ((_b = {
        backgroundColor: componentsWithDepth[variant].base,
      }),
      (_b[
        '@apply ' +
          componentsWithDepth[variant].depths.transparent.slice(1) +
          '\n      bg-opacity-15'
      ] = {}),
      _b);
  });
  addUtilities(__assign({}, cardComponents));
};
exports['default'] = createCards;
