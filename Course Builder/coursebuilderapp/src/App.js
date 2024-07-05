import './App.css';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import { createContext, useContext, useState } from 'react';
import Newmodule from './Components/Newmodule';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './Components/List'

export const myContext = createContext();
function App() {
 
  const [mydata, setMydata] = useState(false)
  const [module,setModule]=useState('')
  const [allData, setAllData] = useState([]);
  const [edit, setEdit]=useState(false)
  const [editNewModule, setEditNewModule]=useState(false);  
  


  return (
    <div >
      <myContext.Provider value={{ mydata, setMydata,module,setModule, allData, setAllData,edit,setEdit, editNewModule,setEditNewModule }} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Homepage />} />
            <Route path='/newmodule' element={<Newmodule />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
