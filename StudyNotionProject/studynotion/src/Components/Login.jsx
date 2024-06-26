import log from '../images/login-bg.png'
import Tamplate from './Tamplate';
function Login({ setLogged }) {
  return (
    <>
      <div className=' mt-[50px]'>
        <Tamplate
          title="Welcome Back"
          des1="Build skills for today, tomorrow, and beyond. "
          des2="Education to future-proof your career."
          img={log}
          formType="login"
          setLogged={setLogged}
        />
      </div>
    </>

  )
}
export default Login;