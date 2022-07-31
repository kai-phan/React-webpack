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
        path: 'styling',
        children: [
          {
            index: true,
            element: loadable(() => import('src/pages/Styling')),
          },
          {
            path: 'flex',
            element: loadable(() => import('src/pages/Styling/Flexbox')),
          },
        ],
      },
    ],
  },
] as RouteObject[];
