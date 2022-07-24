import { useRef } from 'react';

const usePrevious = <T>(state: T) => {
  const previousRef = useRef<T>();
  const stateRef = useRef<T>();

  previousRef.current = stateRef.current;
  stateRef.current = state;

  return previousRef.current;
};

export default usePrevious;
