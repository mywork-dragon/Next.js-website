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
var addOpacity_1 = require('../utils/addOpacity');
var addHoverClasses_1 = require('../utils/addHoverClasses');
/**
 * Creates somewhat opinionated 3d card components
 * @param param0 object containing Tailwind plugin function parameters
 *
 */
var createCards = function (_a) {
  var addComponents = _a.addComponents,
    e = _a.e,
    theme = _a.theme;
  // get config data
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
  var subClasses = addSubClasses_1['default']({ theme: theme });
  // adds depth effect using shadow
  var componentsWithDepth = addDepthClasses_1['default']({
    variants: variants,
    addComponents: addComponents,
  });
  // create components
  var cardComponents = {
    '.skew': {
      transformStyle: 'preserve-3d',
    },
  };
  Object.keys(componentsWithDepth).forEach(function (variant) {
    var _a, _b;
    cardComponents['.card-' + variant] =
      ((_a = {
        backgroundColor: componentsWithDepth[variant].base,
        transition: 'all .3s ease',
      }),
      (_a['@apply ' + componentsWithDepth[variant].depths.fill.slice(1)] = {}),
      _a);
    cardComponents['.card-' + variant + '-transparent'] =
      ((_b = {
        backgroundColor: addOpacity_1['default'](
          componentsWithDepth[variant].base,
          0.15
        ),
        transition: 'all .3s ease',
      }),
      (_b[
        '@apply ' + componentsWithDepth[variant].depths.transparent.slice(1)
      ] = {}),
      _b);
  });
  addComponents(
    addHoverClasses_1['default'](
      __assign(__assign({}, cardComponents), subClasses),
      e
    )
  );
};
exports['default'] = createCards;
