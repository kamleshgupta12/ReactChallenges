import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { myContext } from "../App";
import { useContext } from "react";
function Nav() {
    const {setMydata, mydata} = useContext(myContext);
    return (
        <>
            <div className="  bg-slate-200">
              <div className=" w-[80%] h-[60px]  flex justify-center items-center justify-between m-auto ">
              <div className="font-bold text-[20px]">
                    Course Builder
                </div>
                <div onClick={()=>setMydata(!mydata)}  className=" w-[110px] bg-red-800 text-[20px] p-[5px] rounded-md text-white flex justify-center items-center gap-2 ">
                     <span>< FaPlus/></span>
                     <span>Add</span>
                     <span><IoMdArrowDropdownCircle/></span>
                </div>
              </div>
            </div>

        </>
    )
}

export default Nav;