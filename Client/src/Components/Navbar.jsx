import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';

const Navbar = () => {

   const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div className='flex justify-between items-center py-4' >
            <Link to="/">
                <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {user ?
                    <div className='flex gap-2 sm:gap-3 items-center'>
                        <button onClick={()=>navigate('/buy-credit')}  className='flex gap-2 items-center  bg-blue-100  px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>
                            <img className='w-5' src={assets.credit_star} alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : 50 </p>
                        </button>

                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Yash </p>
                        <div className='relative group'>
                            <img className='w-10 drop-shadow ' src={assets.profile_icon} alt="" />
                            <div className='absolute hidden group-hover:block shadow-lg rounded p-4 top-0 right-0 z-50 text-black pt-12 '>
                                <ul className='list-none m-0 p-2 bg-white rounded-md broder text-sm'>
                                    <li className='py-1 cursor-pointer pr-10'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex gap-2 items-center sm:gap-5'>
                        <p onClick={() => navigate('./buy-credit')} className='cursor-pointer'>Pricing</p>
                        <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 sm:px-10 rounded-full'>Login</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar