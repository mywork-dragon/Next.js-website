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
var baseStyles = {
  marginLeft: '8px',
  border: 'none',
  borderRadius: '4px',
  width: '160px',
  height: '200px',
  paddingTop: '26px',
  zIndex: '10',
};
/**
 * Creates somewhat opinionated 3d card components
 * @param param0 object containing Tailwind plugin function parameters
 *
 */
var createCards = function (_a) {
  //const transformMatrix = 'matrix(0.73, -0.40, 0.8, 0.43, -5, -25)';
  var addComponents = _a.addComponents,
    theme = _a.theme;
  var transformMatrix =
    theme('cards.transformMatrix') || 'matrix(1, 0, 0, 1, 0, 0)';
  var variants = __assign(
    {
      white: {
        base: '#FFFFFF',
        shadow: '#D5DFE9',
      },
    },
    theme('cards.variants')
  );
  // creates base subclasses as well as color variants
  addSubClasses_1['default']({ addComponents: addComponents, theme: theme });
  var componentsWithDepth = addDepthClasses_1['default']({
    variants: variants,
    addComponents: addComponents,
    theme: theme,
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
    cardComponents['.card-' + variant] = __assign(
      __assign({}, baseStyles),
      ((_a = { backgroundColor: componentsWithDepth[variant].base }),
      (_a['@apply ' + componentsWithDepth[variant].depths.fill.slice(1)] = {}),
      _a)
    );
    cardComponents['.card-' + variant + '-transparent'] = __assign(
      __assign({}, baseStyles),
      ((_b = { backgroundColor: componentsWithDepth[variant].base }),
      (_b[
        '@apply ' +
          componentsWithDepth[variant].depths.transparent.slice(1) +
          '\n      bg-opacity-40'
      ] = {}),
      _b)
    );
  });
  addComponents(__assign({}, cardComponents));
};
exports['default'] = createCards;
