import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function SignupForm({ setLogged }) {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showpass, setShowPass] = useState(false)
    const [showpass2, setShowPass2] = useState(false);
    const [acountType, setAcountType]=useState("student");
    const navigate = useNavigate();

    function changeHandler(event) {
        setformData((preData) => (
            {
                ...preData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("password do not match");
            return;
        }
        else {
            setLogged(true);
            toast.success("Acount created")
            const data = {
                ...formData,acountType
            }
            console.log(data, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            navigate("/dashboard")

        }
    }
    return (
        <>
            <div>
                <div className="border bg-[#e7e7e7c5] rounded-3xl flex w-[165px] justify-center items-center">
                    <button className={`${acountType=== "student" ? "rounded-3xl w-[100%] py-2  bg-[#6652ff] text-white font-medium" : "px-3 text-[#333] font-medium transition-all duration-200"}`} onClick={()=>setAcountType('student')}>Student</button>
                    <button className={`${acountType=== "instructor" ? "rounded-3xl w-[100%] py-[8px]  bg-[#6652ff] text-white  font-medium" : "px-3 text-[#333] font-medium transition-all duration-200"}`} onClick={()=>setAcountType('instructor')}>Instructor</button>
                </div>
                <form onSubmit={submitHandler} className="mt-1">

                    {/* <<<<<<<<<<<<<< FirstName-LastName >>>>>>>>>>>>>>> */}


                    <div className="flex gap-2 ">
                        <label>
                            <span className="text-[13px]">First Name <sup>*</sup></span>
                            <input type="text"
                                className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff] w-[100%]"
                                required
                                name="firstName"
                                value={formData.firstName}
                                placeholder="Enter your first name"
                                onChange={changeHandler}
                            />
                        </label>
                        <label>
                            <span className="text-[13px]">Last Name <sup>*</sup></span>
                            <input type="text"
                                className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff] w-[100%]"
                                required
                                name="lastName"
                                value={formData.lastName}
                                placeholder="Enter your last name"
                                onChange={changeHandler}
                            />
                        </label>
                    </div>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<< email Address >>>>>>>>>>>>>>>>>>>>>  */}


                    <label className="flex flex-col">
                        <span className="text-[13px]">Email<sup>*</sup></span>
                        <input type="text"
                                className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff] w-[100%]"
                            required
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={changeHandler}
                        />
                    </label>

                    {/* <<<<<<<<<<<<<< Create password >>>>>>>>>>>>>>> */}



                    <div className="flex gap-2">
                        <label className="relative">
                            <span className="text-[13px]">Create Password <sup>*</sup></span>
                            <input
                                className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff] w-[100%] pr-7"
                                type={showpass ? ("text") : ("password")}
                                required
                                name="password"
                                value={formData.password}
                                placeholder="Enter Password"
                                onChange={changeHandler}
                            />
                            <span className="absolute top-10 right-0 text-[22px]" onClick={() => setShowPass((pre) => !pre)}>
                                {showpass ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                            </span>
                        </label>
                        <label className="relative">
                            <span className="text-[13px]">Confirm Password <sup>*</sup></span>
                            <input
                                className="border m-1 p-2 rounded-lg border-b-[2px] outline-none border-b-[#761bff] w-[100%] pr-7"
                                type={showpass2 ? ("text") : ("password")}
                                required
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                placeholder="Enter Confirm Password"
                                onChange={changeHandler}
                            />
                            <span className="absolute top-10 right-0 text-[22px]" onClick={() => setShowPass2((pre) => !pre)}>
                                {showpass2 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                            </span>
                        </label>
                    </div>
                    <div className="flex justify-center items-center mt-1 ">
                        <button className="border w-[100%]  font-bold mx-1 rounded-lg p-2 bg-[#761bff] text-white">Create Acount</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SignupForm;