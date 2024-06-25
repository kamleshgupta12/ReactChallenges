import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';



function Nav(props) {
    const logged = props.logged;
    const setLogged = props.setLogged;
    return (
        <>
            <div className='flex items-center   justify-between w-[100%] m-auto h-[80px] bg-[#d9d9d9a5] p-2 px-9'>
                <div className=''>
                    <img className='w-[70px] h-[70px] rounded-full  ' src={require('../images/logo.png')} />
                </div>
                <nav>
                    <ul className='flex '>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/"><li>About</li></Link>
                        <Link to="/"><li>Contact</li></Link>
                    </ul>
                </nav>
                <div className='flex gap-2'>
                    {
                        !logged &&
                        <Link to="/login">
                            <button className='border font-bold p-2 px-4 border-[#761bff] text-[#761bff] bg-white  hover:bg-[#761bff] hover:text-white rounded-lg'>
                                Login
                            </button>
                        </Link>
                    }
                    {
                        !logged &&
                        <Link to="/signup">
                            <button className='border font-bold p-2 px-4 border-[#761bff] text-[#761bff] bg-white  hover:bg-[#761bff] hover:text-white rounded-lg'>SignUp</button>
                        </Link>
                    }
                    {
                        logged &&
                        <Link to="/">
                            <button className='border font-bold p-2 px-4 border-[#761bff] text-[#761bff] bg-white  hover:bg-[#761bff] hover:text-white rounded-lg' onClick={() => {
                                setLogged(false)
                                toast.success("logout")
                            }}>Logout</button>
                        </Link>
                    }
                    {
                        logged &&
                        <Link to="/dashboard">
                            <button className='border font-bold p-2 px-4 border-[#761bff] text-[#761bff] bg-white  hover:bg-[#761bff] hover:text-white rounded-lg'>Dashboard</button>
                        </Link>
                    }
                </div>
            </div>

        </>
    )
}
export default Nav;