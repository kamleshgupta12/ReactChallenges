import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Filter = ( props ) => {
   const filterData =props.filterData;
   const category = props.category;
   const setCategory= props.setCategory;
   function filterHandler(title){
      setCategory(title);
   }
   // console.log(Filter, "dataa");
   return (
      <>
         <div className="flex items-center justify-center gap-3 flex-wrap pt-[10px] ">
            {
               filterData.map((data) => {
                  return (
                     
                     <button onClick={()=>filterHandler(data.title)}
                      className={`bg-slate-900 px-[10px] py-[5px] rounded-lg text-white border hover:bg-slate-500 
                      ${category===data.title ? " border-2 bg-slate-500  " : "border-transparent"}`}>
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