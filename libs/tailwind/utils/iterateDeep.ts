type Primitive = string | boolean | null | number | undefined;

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

export default iterateDeep;
