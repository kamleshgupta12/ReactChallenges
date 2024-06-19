import Card from './Card';
import { useState } from 'react';
function Testimonial(props){
    const review =props.review;
    console.log(review,">>>>>>>>>>>>>>>>>>>>")

   const [index, setIndex]=useState(0);
    return(
        <>
        <div className='border relative w-[450px] bg-white shadow-sm'>
        <Card review={review[index]} index={index} setIndex={setIndex}/>
        </div>
        </>
    )
}
export default Testimonial;