

// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';

// Get the root element in the HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
