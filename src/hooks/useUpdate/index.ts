import { useCallback, useReducer, useRef } from 'react';

const useUpdate = () => {
  const [, update] = useReducer(() => [], []);
  const ref = useRef(0);

  ref.current++;
  return { state: ref.current, update: useCallback(update, []) };
};

export default useUpdate;
