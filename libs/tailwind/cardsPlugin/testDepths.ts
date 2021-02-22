import createDepths from './createDepths';

const depth = ['2', 7] as Parameters<typeof createDepths>[0];
const color1 = ['white', 'white'] as Parameters<typeof createDepths>[1];
const color2 = ['blue', 'blue'] as Parameters<typeof createDepths>[2];
const skew = 1;

console.log(createDepths(depth, color1, color2));
console.log(createDepths(depth, color1, color2, skew));
