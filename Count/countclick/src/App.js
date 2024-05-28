import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(10);
  function decreseValue() {
    setCount(count - 1);
  }

  function increseValue() {
    setCount(count + 1);
  }
  function resetValue() {
    setCount(0);
  }
  return (
    <div className='flex flex-col justify-center items-center  border 2px gap-2  '>
      <div>
        <h1 className="bg-red-200 rounded-sm px-2">Increment & Decrement </h1>
      </div>
      <div>
        <button onClick={decreseValue} className="bg-green-500 rounded-sm px-2 text-white" >-</button>
      </div>
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={increseValue} className="bg-green-500 rounded-sm px-2 text-white" >+</button>
      </div>
      <div>
        <button onClick={resetValue} className="bg-red-200 rounded-sm px-2">Reset</button>
      </div>
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
