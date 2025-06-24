import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally
import './index.css'; // Import your custom global CSS
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome core styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);