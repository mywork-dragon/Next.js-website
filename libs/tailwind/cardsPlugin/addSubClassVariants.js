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
// variants with respet to color
var placeholder = {
  white: {
    backgroundColor: '#305EED',
    opacity: 0.1,
  },
  gray: {
    backgroundColor: '#305EED',
    opacity: 0.1,
  },
  blue: {
    backgroundColor: '#062233',
    opacity: 0.3,
  },
  green: {
    backgroundColor: '#25A055',
    opacity: 0.4,
  },
  orange: {
    backgroundColor: '#CB7F27',
    opacity: 0.4,
  },
};
var addSubClassVariants = function (_a) {
  var variants = _a.variants,
    addComponents = _a.addComponents;
  var subClassVariants = {};
  Object.keys(variants).forEach(function (color) {
    var _a;
    // add placeholder variants
    subClassVariants['.card-' + color + ' .placeholder'] = __assign(
      __assign({}, placeholder[color]),
      {
        boxShadow:
          color == 'white'
            ? 'inset 0px 2px 0px #233057'
            : 'inset 0px 2px 0px #1C1C1C',
      }
    );
    subClassVariants['.card-' + color + '-transparent .placeholder'] =
      ((_a = {
        backgroundColor: variants[color].base,
      }),
      (_a['@apply bg-opacity-40'] = {}),
      _a);
    // add icon variants
    subClassVariants['.card-' + color + ' .icon'] = {
      color: ['white', 'gray'].includes(color) ? '#BFD8E4' : '#FFFFFF',
    };
    subClassVariants['.card-' + color + '-transparent .icon'] = {
      opacity: '0.4',
      transform: 'translateX(2px)',
      border: 'none',
      borderRadius: '20px',
    };
    // add text variants
    subClassVariants['.card-' + color + ' .title'] = {
      color: ['white', 'gray'].includes(color) ? '#305EED' : '#FFFFFF',
    };
    subClassVariants['.card-' + color + ' .subtitle'] = {
      color: ['white', 'gray'].includes(color) ? '#80B0C8' : '#FFFFFF',
    };
  });
  addComponents(__assign({}, subClassVariants));
};
exports['default'] = addSubClassVariants;
