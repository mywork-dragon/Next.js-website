'use strict';
exports.__esModule = true;
var createCards_1 = require('./createCards');
// a mock function which logs components to console
var addUtilities = function (components) {
  console.log(JSON.stringify(components, null, 2));
};
var theme = function (query) {
  return query == 'cards.variants' ? variants : undefined;
};
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
  fake: {
    base: 'base',
    shadow: '',
  },
};
createCards_1['default']({ addUtilities: addUtilities, theme: theme });
