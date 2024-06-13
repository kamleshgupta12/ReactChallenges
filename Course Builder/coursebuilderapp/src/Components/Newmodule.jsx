import { RxCross1 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css"
import { useContext, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { myContext } from "../App";
function Newmodule() {
    const {setModule, setAllData,module}=useContext(myContext);
    const navigate = useNavigate()
    function handleClick(){
       
        if(module === ""){
            navigate('/newmodule')
        }else{
            navigate('/list')
            setAllData((prev) => [...prev, module])
        }
    }
    useEffect(()=>{
        AOS.init({duration:1000})
    })
    return (
        <>
            <div  className="w-[100%] h-[100vh] bg-[#bcbcbb] flex justify-center items-center">
                <div  data-aos="zoom-out-down" className=" border w-[500px] h-[300px] rounded-xl bg-white p-[30px] ">
                    <div className="flex justify-between items-center ">
                        <h1 className="font-bold text-[20px]">Create new module</h1>
                        <span onClick={()=>navigate("/")} className="border p-2 rounded-lg hover:bg-[#bcbcbb7d]"><RxCross1 /></span>
                    </div>
                    <div className="mt-9 font-medium text-lg"> 
                        Module Name
                    </div>
                    <div >
                        <input onChange={(e)=>setModule(e.target.value)} className="w-[100%] h-[50px] border-2 rounded-lg mt-2 p-2" type="text" name="" id="" />
                    </div>
                    <div className="flex gap-2 justify-end mt-9">
                        <button onClick={()=>navigate('/')} className="border p-3 w-[90px] rounded-md font-semibold">Cancel</button>
                        <button onClick={handleClick}  className="border p-3 w-[90px] rounded-md font-semibold bg-[#47a2f7]">Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newmodule;