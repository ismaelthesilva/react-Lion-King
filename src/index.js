import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Import your styles
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
