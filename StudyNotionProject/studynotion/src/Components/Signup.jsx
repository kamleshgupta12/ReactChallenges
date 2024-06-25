import Tamplate from "./Tamplate";
import sign from '../images/signup-bg.png'


function Signup({setLogged}){
    return(<>
    <Tamplate
    title="Welcome to"
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