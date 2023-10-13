import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Books from './components/books/Books';
import Login from './components/login/Login';
import { getAuthToken } from './helpers/token';
import RouteGuard from './helpers/RouteGuard';
import NotFound from './components/NotFound';
import Template from './components/Template';
import Logout from './components/logout/Logout';

function App() {
  const token = getAuthToken();
  return (
    <Template token={token}>
      <Routes>
        <Route path="/" element={<RouteGuard />}>
          <Route path='/' element={<Books />} exact />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Template>
  );
}

export default App;
