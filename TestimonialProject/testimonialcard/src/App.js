import { useState } from 'react';
import './App.css';
import Testimonial from './Testimonial';
import review from './data'
// import { useState } from 'react';
function App() {
  return (
    <>
      <div className=' m-auto h-[100vh] bg-[#dbdadae0] flex flex-col justify-center items-center gap-5'>
        <div className=' flex flex-col justify-center items-center'>
          <h4 className=' font-bold font-serif text-[20px]'>Our Testimonials</h4>
        <div className='w-[100px] h-[4px] bg-[#7700ffd7]'></div>
        </div>
        <Testimonial review={review}  />
      </div>
    </>
  );
}

export default App;
