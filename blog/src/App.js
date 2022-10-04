import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Register from "./Screens/Register";
import ChangePass from "./Screens/ChangePass";
import SecureRoute from "./Screens/SecureRoute";
function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rtk Query</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile/status">Status</Link>
          <Link to="/profile/admin">Admin</Link>
          <button
            onClick={() => {
              setAuth(!auth);
            }}
          >
            {auth ? "logout" : "login"}
          </button>
        </nav>
      </header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Home />}>
            <Route path=":id" element={<About />} />
            <Route path="chats" element={<Home />} />
            <Route
              path="admin"
              element={
                auth ? <SecureRoute /> : <h1>YOU ARE NOT AUTHENTICATED</h1>
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
