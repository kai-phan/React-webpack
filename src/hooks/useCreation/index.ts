import { DependencyList, useRef } from 'react';
import { depsAreSame } from 'src/utils/helper';

const useCreation = <T>(factory: () => T, deps: DependencyList) => {
  const ref = useRef({
    state: factory(),
    initialed: false,
    oldDeps: deps,
  });

  if (!ref.current.initialed || !depsAreSame(ref.current.oldDeps, deps)) {
    ref.current.initialed = true;
    ref.current.state = factory();
    ref.current.oldDeps = deps;
  }

  return ref.current.state as T;
};

export default useCreation;
