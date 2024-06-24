import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Tamplate({ title, des1, des2, img, formType, setLogged }) {
    return (
        <>
            <div className="h-[70vh] max-w-[80%] flex  justify-center items-center bg-[#b1afafc8] m-auto">
                <div className="border  ">
                    <img className=" w-[500px] h-[400px] " src={img} />
                </div>
                <div className=" w-[450px] h-[400px] border flex flex-col gap-3 justify-center items-center ">
                    <div>
                        <h1 className="text-[30px] font-medium text-[white]">{title}</h1>
                    </div>
                    <div>
                        <span>{des1}</span>
                        <span>{des2}</span>
                    </div>
                    <div>
                        {
                            formType === "signup"
                                ? (<SignupForm />)
                                : (<LoginForm />)
                        }
                    </div>
                    <div>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </div>
                    <div>
                        <button>Sign up with google</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tamplate;