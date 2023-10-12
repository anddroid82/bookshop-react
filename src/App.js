import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Books from './book/Books';
import Login from './login/Login';
import { getAuthToken } from './helpers/token';
import RouteGuard from './helpers/RouteGuard';
import NotFound from './helpers/NotFound';

function App() {
  const token = getAuthToken();
  return (
    <Routes>
      <Route path="/" element={<RouteGuard />}>
        <Route path='/' element={<Books />} exact />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
