import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register/Reguster'
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import { useSelector } from 'react-redux';
import Messenger from './components/messenger/Messenger';

function App() {
  let token = (useSelector((state) => state?.user?.currentUser?.token));

  return (
    <div>
      {token ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/messenger" element={<Messenger />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App;