import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { DemoContextProvider } from './context/company'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Suspense fallback="loading">
    <BrowserRouter>
      <DemoContextProvider>
        <App />
      </DemoContextProvider>
    </BrowserRouter>
  </React.Suspense>
);
