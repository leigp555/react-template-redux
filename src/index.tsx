import React from 'react';
import ReactDOM from 'react-dom/client';
import 'nprogress/nprogress.css';
import './style/index.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { userStore } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Router>
    <Provider store={userStore()}>
      <App/>
    </Provider>
  </Router>
);

reportWebVitals();
