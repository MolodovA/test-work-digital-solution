import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from 'components/app/App';
import { setupStore } from 'redux/store';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);

reportWebVitals();
