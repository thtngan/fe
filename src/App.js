import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './components/signIn';


function App() {
  return (

        <Routes>

          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/home" element={<Home/>} /> */}
          <Route exact path="/signin" element={<SignIn/>} />
        </Routes>
        
  );
}

export default App;
