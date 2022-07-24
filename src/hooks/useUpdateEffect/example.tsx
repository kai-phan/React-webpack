import React, { useEffect, useState } from 'react';

import useUpdateEffect from './';

const UpdateEffect: React.FC = () => {
  const [state, setState] = useState<number>(0);
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');

  useUpdateEffect(() => {
    setText1(`text 1 :${state}`);
  }, [state]);

  useEffect(() => {
    setText2(`text 2: ${state}`);
  }, [state]);

  return (
    <React.Fragment>
      <hr />
      <h3>useUpdateEffect</h3>
      <button onClick={() => setState((state) => state + 1)}>
        Change state {state}
      </button>
      <ul>
        <li>render useUpdateEffect: {text1}</li>
        <li>render useEffect: {text2}</li>
      </ul>
    </React.Fragment>
  );
};

export default UpdateEffect;
