import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './styles/globals.scss';
import App from './pages/Routes';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/Auth';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading loadingText="Carregando..." />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();