const obj = {
  _array: [1, 2, 'abc'],
  _string: 'hi!',
  _bool: false,
  _object: {
    _isTruthy: true,
  },
  _nested: {
    _child: {
      _array: [1, false, { _deep: 'crazy', _deepArray: [1] }],
      _b: 1,
    },
  },
  _fnc: () => {
    return 1;
  },
};

export type KeySets<T extends readonly any[]> = Exclude<
  keyof T,
  keyof any[] | symbol
>;
//
// export type ExtractArray<
//   T extends readonly any[],
//   K extends keyof T = keyof T,
// > = K extends string ? T[K] extends  : never;

type Path<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends any[]
    ? K | `${K}.[${number}]`
    : T[K] extends object
    ? K | `${K}.${Path<T[K]>}`
    : K
  : never;

function getIn<T>(source: T, path: Path<T>, defaultValue?: any) {
  return {};
}

export const a = getIn(obj, '_object._isTruthy');
export const b = getIn(obj, '_array.[1]');
export const c = getIn(obj, '_nested._child._array.[2]');
