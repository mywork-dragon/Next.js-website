type Primitive = string | boolean | null | number | undefined;

type DepthTuple = [string | number, number];
type ColorTuple = [string | number, string];

type Colors = Record<string | number, string | Record<string, number>>;
type Depths = Record<string | number, number>;

interface TailwindOptions {
  addComponents: (components: Record<string, unknown>) => any;
  theme: <T extends 'depths' | 'colors'>(
    query: T
  ) => T extends 'depths' ? Depths : Colors;
}

const isObject = (input: unknown) =>
  Boolean(input) && !(input instanceof Array) && input instanceof Object;

/**
 * Works as depth first forEach on object with unlimited depths and primitive values on
 * deepest child nodes
 *
 * @param input input should be an object
 * @param callback function to callback with `value` of deepest child node on each branch and `pathTo` array
 * @param pathTo array of all nodes, starting node defaults to empty array but an object name can be passed as root node
 */
const iterateDeep = (
  input: unknown,
  callback: (value: Primitive, pathTo: string[]) => any,
  pathTo: string[] = []
) => {
  if (isObject(input)) {
    Object.keys(input as Record<string, unknown>).forEach((key) => {
      iterateDeep((input as Record<string, unknown>)[key], callback, [
        ...pathTo,
        key,
      ]);
    });
  } else if (!(input instanceof Array)) {
    callback(input as Primitive, pathTo);
  }
};

// creates CSS box shadow property to simulate 3d depth (works only for -x == y)
const addDepth = (depth: number, colorOuter: string, colorInner?: string) => {
  const inner = [];
  const outer = [];

  for (let i = 1; i <= depth; i++) {
    if (colorInner) {
      inner.push(`-${i}px ${i}px 0 -1px ${colorInner}`);
    }
    outer.push(`-${i}px ${i}px ${colorOuter}`);
  }

  return [...inner, ...outer].join(', ').concat(';');
};

/**
 *  creates depths classes with given depth, and colors
 *  single color -> adds depth
 *  both colors -> creates depth with color1 outline and color2 fill
 */
const createDepths = (
  depthTuple: DepthTuple,
  color1: ColorTuple,
  color2: ColorTuple
) => {
  const [depthKey, depthPx] = depthTuple;
  const [colorKey1, colorString1] = color1;
  const [colorKey2, colorString2] = color2;

  const componentStyles = {
    position: 'relative',
    boxSizing: 'border-box',
    left: depthPx,
  };

  return {
    [`.depth-${depthKey}-${colorKey1}`]: {
      ...componentStyles,
      boxShadow: addDepth(depthPx, colorString1),
    },
    [`.depth-${depthKey}-${colorKey1}-${colorKey2}`]: {
      ...componentStyles,
      border: `1px solid ${colorString1}`,
      boxShadow: addDepth(depthPx, colorString1, colorString2),
    },
  };
};

// export plugin function
export default ({ addComponents, theme }: TailwindOptions) => {
  const themeDepths = theme('depths');

  const themeColors = theme('colors');

  let components: Record<string, any> = {};
  let colors: Record<string, string> = {};

  iterateDeep(themeColors, (color, pathTo) => {
    const index = pathTo.join('-');
    colors[index] = color as string;
  });

  Object.keys(themeDepths).forEach((depthKey) => {
    Object.keys(colors).forEach((colorKey1) => {
      Object.keys(colors).forEach((colorKey2) => {
        if (colorKey1 != colorKey2) {
          const depthTuple = [
            depthKey as string,
            themeDepths[depthKey],
          ] as DepthTuple;

          const colorTuple1 = [
            colorKey1 as string,
            colors[colorKey1],
          ] as ColorTuple;

          const colorTuple2 = [
            colorKey2 as string,
            colors[colorKey2],
          ] as ColorTuple;

          components = {
            ...components,
            ...createDepths(depthTuple, colorTuple1, colorTuple2),
          };
        }
      });
    });
  });

  addComponents(components);
};
