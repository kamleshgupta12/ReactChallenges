// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


// function Card(props) {
//     const review = props.review;
//     console.log(review,">>>>>>>")
//     const index = props.index;

//     const setIndex = props.setIndex;
    
//     function leftHandler() {
//         if (index - 1 < 0) {
//             setIndex(review.length)
//         }
//         else {
//             setIndex(index - 1)
//         }
//     }
//     function rightHandler() {
//         if (index === 4) {
//             setIndex(0)
//         }
//         else {
//             setIndex(index + 1)
//         }
//     }
//     function surpriseHandler() {
//         // console.log(review.length,"gsdhewg");
//         let randomIndex = Math.floor(Math.random() *5);
//         console.log(randomIndex,"dataaaaaaa random")
//         setIndex(randomIndex)
//     }
//     return (
//         <>
//             <div className="flex flex-col justify-center items-center gap-3  pt-9 p-5">
//                 <div className="bg-[#7700ffd7] border rounded-full w-[100px] h-[100px]  absolute top-[-50px] left-4 ">
//                     <img className="absolute top-1 right-2 rounded-full w-[100px] h-[100px]" src={review.image} alt="" />
//                 </div>
//                 <div className="flex flex-col justify-center items-center">
//                     <p className=" font-sans text-[20px] font-medium">{review.name}</p>
//                     <p className="text-[13px] font-medium font-mono text-[#555]">{review.job}</p>

//                 </div>
//                 {/* <div>
//     </div> */}
//                 <div className="text-[#7700ffd7]"><FaQuoteLeft /></div>
//                 <div className="text-[#333] text-center font-sans text-[14px]">{review.text}</div>
//                 <div className="text-[#7700ffd7]"><FaQuoteRight /></div>
//                 <div className="flex gap-3 text-[#7700ffaf]">
//                     <button onClick={leftHandler}><IoIosArrowBack /></button>
//                     <button onClick={rightHandler}><IoIosArrowForward /></button>
//                 </div>
//                 <div><button onClick={surpriseHandler} className="bg-[#7700ffcd] p-1 rounded-lg text-white font-semibold text-[15px]">Surprise Me</button></div>
//             </div>
//         </>

//     )
// }
// export default Card;


import AOS from "aos";
import "aos/dist/aos.css" 
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import reviews from "./data";
import { useEffect, useState } from "react";

function Card() {
  
    const [current, setCurrent] = useState(0);
    const leftHandler = () =>{
        if(current <=0){
            setCurrent(reviews.length-1)
        }else{
            setCurrent(current-1)
        }
       
    }

    useEffect(()=>{
        AOS.init({duration:1000})
       } ,[current])
    

    const rightHandler = () =>{
        if(current == reviews.length-1){
            setCurrent(0)
        }else{
            setCurrent(current +1)
        }
        
    }

    const radnom = () =>{
        setInterval(()=>{
            setCurrent(Math.floor(Math.random()*reviews.length))
        },2000)
        
    }

    return (
        <>
            <div  className="flex flex-col justify-center items-center gap-3  pt-9 p-5">
                <div data-aos="fade-right" className="bg-[#7700ffd7] border rounded-full w-[100px] h-[100px]  absolute top-[-50px] left-4 ">
                    <img className="absolute top-1 right-2 rounded-full w-[100px] h-[100px]" src={reviews[current].image} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" font-sans text-[20px] font-medium">{reviews[current].name}</p>
                    <p className="text-[13px] font-medium font-mono text-[#555]">{reviews[current].job}</p>

                </div>
                {/* <div>
    </div> */}
                <div className="text-[#7700ffd7]"><FaQuoteLeft /></div>
                <div className="text-[#333] text-center font-sans text-[14px]">{reviews[current].text.substring(0,150)+"....."}</div>
                <div className="text-[#7700ffd7]"><FaQuoteRight /></div>
                <div className="flex gap-3 text-[#7700ffaf]">
                    <button onClick={leftHandler}><IoIosArrowBack /></button>
                    <button onClick={rightHandler}><IoIosArrowForward /></button>
                </div>
                <div><button onClick={radnom}  className="bg-[#7700ffcd] p-1 rounded-lg text-white font-semibold text-[15px]">Surprise Me</button></div>
            </div>
        </>

    )
}
export default Card;