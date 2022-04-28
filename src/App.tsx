import React from 'react';
import { useRoutes } from 'react-router-dom';

import routerConfig from 'src/router.config';

const App: React.FC = () => {
  const routes = useRoutes(routerConfig);

  return <React.Fragment>{routes}</React.Fragment>;
};

export default App;
