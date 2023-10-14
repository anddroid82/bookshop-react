import { Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "./components/books/Books";
import Login from "./components/login/Login";
import { getAuthToken, setAuthToken } from "./helpers/token";
import RouteGuard from "./helpers/RouteGuard";
import NotFound from "./components/NotFound";
import Template from "./components/Template";
import Logout from "./components/logout/Logout";
import { createContext, useState } from "react";

export const TokenContext = createContext(null);

function App() {
  const [token, setToken] = useState(getAuthToken());
  const setContextToken = (t)=>{
    setToken(t);
    setAuthToken(t);
  }
  const contextValue = {token,setContextToken};
  return (
    <TokenContext.Provider value={contextValue}>
      <Template token={token}>
        <Routes>
          <Route path="/" element={<RouteGuard />}>
            <Route path="/" element={<Books />} exact />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Template>
    </TokenContext.Provider>
  );
}

export default App;