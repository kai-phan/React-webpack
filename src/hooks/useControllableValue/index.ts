import { useCallback, useRef, useState } from 'react';
import { useIsFirstRender, useUpdate } from 'src/hooks/index';

export type Props<T> = {
  value?: T;
  onChange?: (value: T) => void;
  defaultValue?: T;
};

const useControllableValue = <T>(props: Props<T>) => {
  const isFirstRender = useIsFirstRender();
  const { update } = useUpdate();
  const [state, setState] = useState<T>(
    props.value || (props.defaultValue as any),
  );
  const propsRef = useRef<Props<T>>({
    value: state,
    onChange: setState,
  });

  if (!Object.is(propsRef.current.value, props.value)) {
    propsRef.current.value = props.value;
  }

  if (isFirstRender && typeof props.defaultValue !== 'undefined') {
    propsRef.current.value = props.defaultValue;
  }

  if (!Object.is(propsRef.current.onChange, props.onChange)) {
    propsRef.current.onChange = props.onChange;
  }

  const handleSetState = useCallback((arg: T) => {
    propsRef.current.onChange?.(arg);
    propsRef.current.value = arg;

    update();
  }, []);

  return [propsRef.current.value, handleSetState] as const;
};

export default useControllableValue;
