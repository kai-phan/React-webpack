import React, { useState } from 'react';
import useIsFirstRender from './';

const IsFirstRender = () => {
  const [state, setState] = useState<number>(0);
  const isFirstRender = useIsFirstRender();

  return (
    <React.Fragment>
      <hr />
      <h3>useIsFirstRender</h3>
      <button onClick={() => setState((state) => state + 1)}>
        Click update state : {state}
      </button>
      <ul>
        <li>Is 1st render: {isFirstRender ? `true` : `false`}</li>
      </ul>
    </React.Fragment>
  );
};

export default IsFirstRender;
