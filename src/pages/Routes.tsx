import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Log = lazy(() => import('./Log'));

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path='/' element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/log/:id' element={<Log />} />
        <Route path='*' element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;