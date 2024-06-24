import { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



function SignupForm() {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: ""
    })

    const [showpass, setShowPass] = useState(false)
    const [showpass2,setShowPass2]=useState(false);

    function changeHandler(event) {
        setformData((preData) => (
            {
                ...preData,
                [event.target.name]: event.target.value
            }
        ))
    }
    return (
        <>
            <div>
                <div>
                    <button>Student</button>
                    <button>Instructor</button>
                </div>
                <form>

                    {/* <<<<<<<<<<<<<< FirstName-LastName >>>>>>>>>>>>>>> */}


                    <div>
                        <label>
                            <span>First Name <sup>*</sup></span>
                            <input type="text"
                                required
                                name="firstName"
                                value={formData.firstName}
                                placeholder="Enter your first name"
                                onChange={changeHandler}
                            />
                        </label>
                        <label>
                            <span>Last Name <sup>*</sup></span>
                            <input type="text"
                                required
                                name="lastName"
                                value={formData.lastName}
                                placeholder="Enter your last name"
                                onChange={changeHandler}
                            />
                        </label>
                    </div>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<< email Address >>>>>>>>>>>>>>>>>>>>>  */}


                    <label>
                        <span>Email<sup>*</sup></span>
                        <input type="text"
                            required
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={changeHandler}
                        />
                    </label>

                    {/* <<<<<<<<<<<<<< Create password >>>>>>>>>>>>>>> */}



                    <div>
                        <label>
                            <span>Create Password <sup>*</sup></span>
                            <input
                                type={showpass ? ("text") : ("password")}
                                required
                                name="password"
                                value={formData.password}
                                placeholder="Enter Password"
                                onChange={changeHandler}
                            />
                            <span onClick={()=>setShowPass((pre) => !pre)}>
                                {showpass ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                            </span>
                        </label>
                        <label>
                            <span>Confirm Password <sup>*</sup></span>
                            <input
                                type={showpass2 ? ("text") : ("password")}
                                required
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                placeholder="Enter Confirm Password"
                                onChange={changeHandler}
                            />
                            <span onClick={()=>setShowPass2((pre)=> !pre)}>
                             {showpass2 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                            </span>
                            {/* <span onClick={()=>setShowPass2((pre) => !pre)}>
                                {showpass2 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                            </span> */}
                        </label>
                    </div>
                    <div>
                        <button>Create Acount</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SignupForm;