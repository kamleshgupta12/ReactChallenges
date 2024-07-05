import './App.css';
import Navbar from './Components/Navbar';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
function App() {
  const { fetchPostData } = useContext(AppContext);

  useEffect(() => {
    fetchPostData();
  }, [])

  return (
    <div className="w-full h-full">
      <Navbar />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
