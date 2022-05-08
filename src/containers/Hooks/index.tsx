import React from 'react';

import Previous from 'src/hooks/usePrevious/example';
import Creation from 'src/hooks/useCreation/example';
import UpdateEffect from 'src/hooks/useUpdateEffect/example';
import IsFirstRender from 'src/hooks/useIsFirstRender/example';
import ForceUpdate from 'src/hooks/useUpdate/example';

const Hooks: React.FC = () => {
  return (
    <React.Fragment>
      <Previous />
      <Creation />
      <UpdateEffect />
      <IsFirstRender />
      <ForceUpdate />
    </React.Fragment>
  );
};

export default Hooks;
