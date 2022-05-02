import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
// for viewer js
import 'viewerjs/dist/viewer.css';

import App from './App';
import history from 'src/libs/history';

const container = document.getElementById('app')!;
const root = ReactDOM.createRoot(container);

root.render(
  <Router history={history}>
    <App />
  </Router>,
);
