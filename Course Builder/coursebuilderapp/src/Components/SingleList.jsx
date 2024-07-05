 import { useContext, useState } from "react";
import Editmodule from "./Editmodule";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { myContext } from "../App";
 function SingleList({item, id}){
   
    const [toggle, setToggle] = useState(false)
    // const {edit,setEdit}=useContext(myContext)
    const handleDot = () =>{
        console.log("clicked");
        setToggle(!toggle)

    }
    return(
        <>
         <div className="border flex items-center justify-between gap-4 p-5 h-[60px] mt-4 rounded-md">
                                <div className="flex items-center gap-4">
                                    <div className="border p-2 rounded-full">
                                        <IoMdArrowDropdownCircle />
                                    </div>
                                    <div>
                                        <h1 className="font-bold">{item}</h1>
                                        <span className="text-[14px] text-[#555]">{id+1} module</span>
                                    </div>
                                </div>
                                <button onClick={handleDot}>
                                    <BsThreeDotsVertical />
                                </button>

                            </div>
                            <div>
                               {toggle&& <Editmodule />} 
                            </div>
        </>
    )
 }
 export default SingleList;