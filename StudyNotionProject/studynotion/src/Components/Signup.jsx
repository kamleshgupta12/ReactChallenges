import Tamplate from "./Tamplate";
import sign from '../images/signup.png'


function Signup({setLogged}){
    return(<>
    <Tamplate
    title="this is a demo title sign up page"
    des1="it also demo description "
    des2="same to des1 demo description "
    img={sign}
    formType="signup"
    setLogged={setLogged}
    />
    </>
    )
}
export default Signup;