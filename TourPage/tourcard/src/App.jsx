import { useState } from 'react';
import './App.css';
import './TourData';
import tourData from './TourData';
// import CardConta from './components/card';
import CardContainer from './components/CardContainer';

function App() {
  const [tour, setTour]= useState(tourData);
  console.log(tour,"ariff");
  function removeCard(id){
    const newTour = tour.filter(tour=> tour.id!==id);
    setTour(newTour); 
  }
  
  if(tour.length === 0){
    return(
      <div className="refreshBtn">
        <h3>No Tours Left</h3>
        <button onClick={()=>setTour(tourData)}>Refresh</button>
      </div>
    );
  }
  return (
    <div >
      
     <CardContainer tour={tour} removeCard={removeCard}></CardContainer> 
    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
