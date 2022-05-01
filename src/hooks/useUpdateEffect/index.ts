import { DependencyList, useEffect, useRef } from 'react';

const useUpdateEffect = (fn: () => any, deps: DependencyList) => {
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    return fn();
  }, deps);
};

export default useUpdateEffect;
