import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
  </Router>
);

reportWebVitals();
