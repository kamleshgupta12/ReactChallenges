import { RiFileListLine } from "react-icons/ri";
import { CiLink } from "react-icons/ci";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { myContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Additems(){
    const {mydata}=useContext(myContext);
    console.log(mydata,">>>>>>>>>>>.");
    return(
        <>
        <div style={{display:mydata?"block":"none"}}>
            <div className="w-[290px] border  rounded-md  shadow-md">
                <div className="flex  items-center gap-2 p-[10px] px-[10px] text-blue-500 text-[15px]  font-sans hover:text-blue-700 hover:bg-slate-200 ">
                    <span><RiFileListLine/></span>
                   <Link to='/newmodule'> <button>Create Module</button></Link>
                </div>
                <div className="flex  items-center gap-2 p-[10px] px-[10px] text-blue-500 text-[15px]  font-sans hover:text-blue-700 hover:bg-slate-200 ">
                    <span><CiLink/></span>
                    <span>Add a link</span>
                </div>
                <div className="flex  items-center gap-2 p-[10px] px-[10px] text-blue-500 text-[15px]  font-sans hover:text-blue-700 hover:bg-slate-200 ">
                    <span><MdOutlineDriveFolderUpload/></span>
                    <span>Upload</span>
                </div>
            </div>
        </div>
        </>
    )

}

export default Additems;