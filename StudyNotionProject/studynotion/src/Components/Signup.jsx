import Tamplate from "./Tamplate";
import sign from '../images/signup-bg.png'


function Signup({setLogged}){
    return(<>
    <Tamplate
    title="Join the millions learnings to code with college space for free"
    des1="Build skills for today, tomorrow, and beyond. "
    des2="Education to future-proof your career."
    img={sign}
    formType="signup"
    setLogged={setLogged}
    />
    </>
    )
}
export default Signup;