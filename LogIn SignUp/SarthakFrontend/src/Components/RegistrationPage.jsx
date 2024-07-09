import React from 'react'
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
export const RegistrationPage = () => {
  return (
    <div className='flex items-center justify-center '>
            <div className='relative border rounded-md w-[400px]  flex flex-col items-center justify-center gap-3 bg-[#333069]'>
                <div className='bg-[aqua] absolute top-[-12px] w-[200px] h-[50px] flex justify-center items-center  text-xl '>
                    LOG IN
                </div>
                <div className='text-[100px] mt-12 '>
                   <p className='text-[#ffffff68]'> <CgProfile /></p>
                </div>
                <form>
                    <label className='flex flex-col '>
                        <div className='relative'>
                            <input
                                className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                                type="text" 
                                placeholder='name'
                                />
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><CgProfile /> </p>
                        </div>
                        <br />
                        <div className='relative'>
                            <input 
                            className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                            type="date"
                            placeholder='Date of birth'
                            />
                            
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><RiLockPasswordLine /></p>
                        </div>
                        <br />
                        <div className='relative'>
                            <input
                                className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                                type="email" 
                                placeholder='email'
                                />
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><CgProfile /> </p>
                        </div>
                        <br />
                        <div className='relative'>
                            <input 
                            className='border w-[300px] h-12 rounded-lg bg-[#ffffff68] outline-none pl-12 text-[20px] '
                            type="password"
                            placeholder='password'
                            />
                            
                            <p className='absolute top-3 text-[22px]  border-r-[1.5px] px-2'><RiLockPasswordLine /></p>
                        </div>
                        {/* <div className='flex justify-between px-1'>
                            <div className='flex gap-1'>
                                <input type="checkbox" />
                                <p className='text-[aqua]'>Remember me</p>
                            </div>
                            <p className='text-[aqua]'>forget Password?</p>
                        </div> */}
                        <button className='bg-[aqua] m-10 h-[45px] rounded-md font-[20px]'>SIGN-IN</button>
                    </label>
                </form>
            </div>
        </div>
  )
}
