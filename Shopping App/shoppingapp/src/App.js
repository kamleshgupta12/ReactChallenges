import { Routes, Route } from 'react-router-dom'
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Cart } from './Components/Cart';

function App() {
  return (
    <div className='w-[100%] h-screen'>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;


