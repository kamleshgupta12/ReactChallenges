import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Filter = ({ filterData }) => {
   console.log(Filter, "dataa");
   return (
      <>
         <div className="flex items-center justify-center gap-5 flex-wrap pt-[10px] ">
            {
               filterData.map((data) => {
                  return (
                     
                     <button className="bg-slate-900 px-[10px] py-[5px] rounded-lg text-white border-2 hover:bg-slate-500">
                        {data.title}
                     </button>
                     
                  );
               })
            }
         </div>


      </>
   );
}
export default Filter;