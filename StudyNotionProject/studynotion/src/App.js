import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav'
import { useState } from 'react';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute'
function App() {
  const [logged, setLogged] = useState(false)
  return (
    <>
      <div className=" w-screen h-screen">
        <Nav logged={logged} setLogged={setLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login setLogged={setLogged} />} />
          <Route path='/signup' element={<Signup setLogged={setLogged} />} />
          <Route path='/dashboard' element={
            <PrivateRoute logged={logged}>
            <Dashboard />
            </PrivateRoute>
            
            } />
        </Routes>
      </div>
    </>
  );
}

export default App;
