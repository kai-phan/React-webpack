import React from 'react';

import { useUpdate } from '../';

const ForceUpdate: React.FC = () => {
  const { update, state } = useUpdate();

  return (
    <section>
      <hr />
      <h3>useUpdate</h3>
      <button onClick={update}>Update</button>
      <ul>
        <li>Update: {state}</li>
      </ul>
    </section>
  );
};

export default ForceUpdate;
