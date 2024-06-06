import logo from './logo.svg';
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import { filterData, apiUrl } from './data';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className>
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards/>
    </div>
  );
}

export default App;
