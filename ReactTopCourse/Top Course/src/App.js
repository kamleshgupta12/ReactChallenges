import logo from './logo.svg';
import Card from './Components/Card';
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import Spiner from './Components/Spiner'
import { filterData, apiUrl } from './data';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [couses, setCourse] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory]=useState(filterData[0].title);

  async function fetchData() {
    setLoading(true)
    try {
      let respinse = await fetch(apiUrl);
      let result = await respinse.json();
      setCourse(result.data);
    }
    catch (error) {
      console.log("koi dikkat hai")
    }
    setLoading(false);
  }
  console.log(couses, "fhdsyigqty");
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>

      <div>
        <Navbar />
      </div>
      <div className='space-y-3 '>
        <div className='  '>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div>
          {
            loading ? (<Spiner />) : (<Cards couses={couses} category={category} />)
          }
        </div>
      </div>

    </div>
    
  );
}

export default App;
