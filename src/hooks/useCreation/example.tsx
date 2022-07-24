import React, { useRef, useState } from 'react';

import useCreation from './';

const Creation: React.FC = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);
  const data = useCreation(() => {
    return {
      a: 1,
    };
  }, [state2]);

  return (
    <React.Fragment>
      <hr />
      <h3>useCreation</h3>
      <button onClick={() => setState1((state) => state + 1)}>
        Change state 1 : {state1}
      </button>
      <button onClick={() => setState2((state) => state + 1)}>
        Change state 2: {state2}
      </button>
      <Child data={data} />
    </React.Fragment>
  );
};

const Child = React.memo(({ data }: { data: { a: number } }) => {
  const ref = useRef(0);
  ref.current++;

  return (
    <ul>
      <li>Child render {ref.current}</li>
    </ul>
  );
});

Child.displayName = 'Child';

export default Creation;
