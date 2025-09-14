import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/main.scss';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './ScrollToTop'; // ✅ Import ScrollToTop
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ScrollToTop must be inside BrowserRouter but outside Routes */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
