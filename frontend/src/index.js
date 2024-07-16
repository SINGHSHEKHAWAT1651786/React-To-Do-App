import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Using createRoot from ReactDOM to render the React application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

