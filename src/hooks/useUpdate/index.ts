import { useReducer, useRef } from 'react';

const useUpdate = () => {
  const [, update] = useReducer(() => [], []);
  const ref = useRef(0);

  ref.current++;
  return { state: ref.current, update };
};

export default useUpdate;
