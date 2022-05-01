import { DependencyList, MutableRefObject } from 'react';

export const isBrowser = !!(
  typeof window !== undefined &&
  window.document &&
  window.document.createElement
);

export type TargetValue<T> = T | undefined | null;
export type TargetType = HTMLElement | Element | Window | Document;
export type BasicTarget<T extends TargetType = Element> =
  | MutableRefObject<T>
  | TargetValue<T>
  | (() => TargetValue<T>);

export const getTargetElement = <T extends TargetType>(
  target: BasicTarget<T>,
  defaultElement?: T,
) => {
  if (!isBrowser) return undefined;
  if (!target) return defaultElement;

  let elementTarget: TargetValue<T>;

  if (typeof target === 'function') {
    elementTarget = target();
  } else if ('current' in target) {
    elementTarget = target.current;
  } else {
    elementTarget = target;
  }

  return elementTarget;
};

export function depsAreSame(
  oldDeps: DependencyList,
  deps: DependencyList,
): boolean {
  if (oldDeps === deps) return true;

  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }

  return true;
}
