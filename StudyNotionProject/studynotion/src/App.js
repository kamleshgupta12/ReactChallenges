import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Nav from './Components/Nav'
import { useState } from 'react';
function App() {
  const [logged,setLogged]=useState(false)
  return (
    <>
    <div className="App ">
      <Nav logged={logged} setLogged={setLogged}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/login' element={<Signup/>} />
      </Routes>
    </div>
    
    </>
  );
}

export default App;
