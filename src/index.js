import React from 'react';
import ReactDOM from 'react-dom';
import * as Analytics  from '@vercel/analytics';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas, fab);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Analytics.inject();
reportWebVitals(sendToVercelAnalytics);
