import React, { useState } from 'react';

import { usePrevious } from 'src/hooks';

const Previous: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const prevNum = usePrevious(num);

  return (
    <section>
      <hr />
      <h3>usePrevious</h3>
      <button onClick={() => setNum((num) => num + 1)}>Increase</button>
      <button onClick={() => setNum((num) => num - 1)}>Decrease</button>
      <ul>
        <li>
          state: <b>{num}</b>
        </li>
        <li>
          previous state: <b>{prevNum}</b>
        </li>
      </ul>
    </section>
  );
};

export default Previous;
