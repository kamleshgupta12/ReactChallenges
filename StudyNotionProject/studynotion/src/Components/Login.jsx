import log from '../images/login-bg.png'
import Tamplate from './Tamplate';
function Login({ setLogged }) {
  return (
    <>
      <div className=' mt-[50px]'>
        <Tamplate
          title="Welcome to"
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