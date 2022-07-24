import { useRef } from 'react';

const useIsFirstRender = () => {
  const ref = useRef<boolean>(true);

  if (ref.current) {
    ref.current = false;

    return true;
  }

  return ref.current;
};

export default useIsFirstRender;
