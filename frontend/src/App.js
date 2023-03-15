import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register/Reguster'
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
