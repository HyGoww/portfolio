// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'; // Pour le style global (si nécessaire)
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
