import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as Router } from 'react-router-dom';

import App from './App';
import history from 'src/libs/history';

const container = document.getElementById('app')!;
const root = ReactDOM.createRoot(container);

root.render(
  <Router history={history}>
    <App />
  </Router>,
);
