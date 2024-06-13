import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { myContext } from "../App";

function Editmodule() {
const {edit}=useContext(myContext);
    return (
        <>
            <div  className="w-[100%]  m-auto flex justify-end">
                <div  className="border rounded-md w-[170px] flex flex-col  text-[14px] shadow-lg">
                    <div className=" rounded-md flex items-center px-3 py-2 gap-2 text-[#555] font-medium hover:bg-slate-300">
                        <span><CiEdit /></span>
                        <span>Edit module name</span>
                    </div>
                    <div className="rounded-md flex items-center px-3 py-2 gap-2 text-red-600 font-medium   hover:bg-slate-300">
                        <span ><MdDeleteForever /></span>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editmodule;