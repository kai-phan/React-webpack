import { RouteObject } from 'react-router-dom';
import loadable from 'src/utils/loadable';

export default [
  {
    path: '/',
    children: [
      {
        index: true,
        element: loadable(() => import('src/pages/Home')),
      },
      {
        path: 'hooks',
        element: loadable(() => import('src/pages/Hooks')),
      },
      {
        path: 'integration',
        element: loadable(() => import('src/pages/Integration')),
      },
    ],
  },
] as RouteObject[];
