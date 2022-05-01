import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
import { BasicTarget, depsAreSame, getTargetElement } from 'src/utils/helper';
var a = 1;
const useEffectWithTarget = (
  effect: EffectCallback,
  deps: DependencyList,
  target: BasicTarget<any> | BasicTarget<any>[],
) => {
  const unLoadRef = useRef<any>();
  const hasInitRef = useRef<boolean>(false);
  const elsRef = useRef<(Element | null)[]>([]);
  const depsRef = useRef<DependencyList>([]);

  useEffect(() => {
    const targets = [].concat(target) as BasicTarget<any>[];
    const els = targets.map(getTargetElement);

    if (!hasInitRef.current) {
      hasInitRef.current = true;
      elsRef.current = els;
      depsRef.current = deps;

      unLoadRef.current = effect();
      return;
    }

    if (
      els.length !== elsRef.current.length ||
      !depsAreSame(elsRef.current, els) ||
      !depsAreSame(depsRef.current, deps)
    ) {
      unLoadRef.current?.();

      elsRef.current = els;
      depsRef.current = deps;

      unLoadRef.current = effect();
    }

    return () => {
      unLoadRef.current?.();
      hasInitRef.current = false;
    };
  });
};

export default useEffectWithTarget;
