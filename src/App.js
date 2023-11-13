import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './components/SignIn';
import Home from "./components/Home";

function App() {
  return (

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/signin" element={<SignIn/>} />
        </Routes>
        
  );
}

export default App;
