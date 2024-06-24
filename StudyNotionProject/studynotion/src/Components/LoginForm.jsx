import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";



function LoginForm() {
    const [showpass, setShowPass] = useState(false)
    const [formData, setformData] = useState({ email: "",password:"" })
    
    function changeHandler(event){
         setformData((preData)=>(
            {
                ...preData,
                [event.target.name]:event.target.value
            }
         ))
    }
    return (
        <>
            <form >
                <label>
                    <span>Email Address <sup>*</sup></span>
                    <input
                        required
                        type="text"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder="Enter email address"
                    />
                </label>
                <label>
                    <span>Enter Password <sup>*</sup></span>
                    <
                        required
                        type={(showpass) ? "text" : "password"}
                        name="password"
                        onChange={changeHandler}
                        value={formData.password}
                        placeholder="Enter password"



                   / > 
                    <span onClick={()=>setShowPass((pre) => !pre)}>
                        {
                            showpass
                                ? (<AiOutlineEye />)
                                : (<AiOutlineEyeInvisible />)
                        }
                    </span>
                    <Link to="#">
                        <p>
                            forgot Password
                        </p>
                    </Link>
                </label>
                <button>Sign in</button>
            </form>
        </>
    )
}
export default LoginForm;