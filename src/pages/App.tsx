import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loading from './../components/Loading/index';

import AuthContext from '../contexts/Auth';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Log = lazy(() => import('./Log'));

function App() {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      <Router>
        <Suspense fallback={<Loading loadingText="Carregando..." />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/log/:id" element={<Log />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;