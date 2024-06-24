import log from '../images/login.png'
import Tamplate from './Tamplate';
function Login({setLogged}) {
    return (
        <>
          <div className=''>
          <Tamplate
                title="this is a demo title login page"
                des1="it also demo description "
                des2="same to des1 demo description "
                img={log}
                formType="login"
                setLogged={setLogged}
            />
          </div>
        </>

    )
}
export default Login;