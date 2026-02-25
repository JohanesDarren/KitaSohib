import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('Index.tsx is running...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("CRITICAL ERROR: Could not find root element to mount to");
  throw new Error("Could not find root element to mount to");
}

console.log('Root element found, mounting App...');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);