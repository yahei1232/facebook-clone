import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register/Reguster'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
