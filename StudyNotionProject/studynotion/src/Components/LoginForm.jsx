import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SiEthers } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({ setLogged }) {
    const [showpass, setShowPass] = useState(false)
    const [formData, setformData] = useState({ email: "", password: "" })
    const nevigate = useNavigate();
    function changeHandler(event) {
        setformData((preData) => (
            {
                ...preData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(e) {
        e.preventDefault()
        setLogged(true);
        toast.success("Logged in")

        nevigate("/dashboard")
    }
    return (
        <>
            <form onSubmit={submitHandler} className="">
                <label className="flex flex-col">
                    <span className="text-[13px]">Email Address <sup>*</sup></span>
                    <input
                        className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff]"
                        required
                        type="text"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder="Enter email address"
                    />
                </label>
                <label className="flex flex-col relative">
                    <span className="text-[13px]">Enter Password <sup>*</sup></span>
                    <input
                        className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff] relative"
                        required
                        type={(showpass) ? "text" : "password"}
                        name="password"
                        onChange={changeHandler}
                        value={formData.password}
                        placeholder="Enter password"
                    />
                    <span className="absolute top-10 right-3 text-[22px]" onClick={() => setShowPass((pre) => !pre)}>
                        {
                            showpass
                                ? (<AiOutlineEye />)
                                : (<AiOutlineEyeInvisible />)


                        }
                    </span>
                    <Link to="#">
                        <div className="m-1">
                            <span className=" flex justify-end">forget password</span>
                        </div>
                    </Link>
                </label>
                <div className="flex justify-center items-center "><button className="border w-[100%]  font-bold mx-1 rounded-lg p-2 bg-[#761bff] text-white" >Sign in</button></div>
            </form>
        </>
    )
}
export default LoginForm;