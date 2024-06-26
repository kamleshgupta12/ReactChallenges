import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";


function Tamplate({ title, des1, des2, img, formType, setLogged }) {
    return ( 
        <>
            <div className="p-5   flex  justify-center items-center sm:flex-col md:flex-row bg-[#dddbdb5e] m-auto rounded-3xl mt-2 ">
                <div className="">
                    <img className=" w-[500px] h-[400px] " src={img} />
                </div>
                <div className=" w-[450px] border flex flex-col gap-3 rounded-md  bg-[#ffffff]  shadow-md p-3 ">
                    <div>
                        <h1 className="text-[25px] font-bold text-[#761bff]">{title}</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#000000] text-[18px]">{des1}</div>
                        <div className="text-[#177810] text-[15px] italic">{des2}</div>
                    </div>
                    <div>
                        {
                            formType === "signup"
                                ? (<SignupForm setLogged={setLogged} />)
                                : (<LoginForm setLogged={setLogged} />)
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-[150px] h-[1px] bg-[#999]"></div>
                        <span className="mx-1 font-mono">OR</span>
                        <div className="w-[150px] h-[1px] bg-[#999]"></div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="flex justify-center items-center gap-2 border text-[16px] p-1 rounded-3xl px-2 text-[#333] hover:bg-[#c4c4c4a3]"> <span><FcGoogle /></span>Sign up with google</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tamplate;