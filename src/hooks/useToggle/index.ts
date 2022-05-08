import { useMemo, useState } from 'react';

export type Actions<T> = {
  toggle: () => void;
  set: (arg: T) => void;
  setLeft: () => void;
  setRight: () => void;
};

function useToggle<T = boolean>(value?: T): [T, Actions<T>];
function useToggle<T>(value: T): [T, Actions<T | boolean>];
function useToggle<L, R>(left: L, right: R): [L | R, Actions<L | R>];
function useToggle<L, R>(
  left: L = false as unknown as L,
  right?: R | undefined,
): [L | R, Actions<L | R>] {
  const [state, setState] = useState<L | R>(left);

  const actions = useMemo(() => {
    const revertValueOrigin = (right === undefined ? !left : right) as L | R;

    return {
      toggle() {
        setState((state) =>
          state === revertValueOrigin ? left : revertValueOrigin,
        );
      },
      setLeft() {
        setState(left);
      },
      setRight() {
        setState(revertValueOrigin);
      },
      set(value: L | R) {
        setState(value);
      },
    };
  }, []);

  return [state, actions];
}

export default useToggle;
