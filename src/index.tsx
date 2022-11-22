import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//o root do index.html e onde vamos armazenar nosso sistema
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//mandando renderizar o código na div root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
