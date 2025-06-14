import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { CgClose } from 'react-icons/cg';


const Navbar = ({location, getLocation, openTost, setOpenTost}) => {
    
    const toggle = () =>{
        setOpenTost(!openTost)
    }
    return (
        <div>
            <div className='bg-white py-3 shadow-2xl'>
                <div className='container flex items-center justify-between'>

                    {/* logo section */}
                    <div className='flex items-center gap-5'>
                        <div className="logo ">
                            <Link to='/'>
                                <img className='w-[80px] h-[35px]' src="/e-Logo.jpg" alt="" />
                            </Link>
                        </div>

                        {/* location section */}
                        
                        <div className='flex items-center justify-center relative '>
                            <CiLocationOn className='text-purple-800 font-bold text-xl' />

                            <span className='font-semibold'>{location ? 
                                <div className='text-sm'>
                                    {location.city || location.town || location.village || location.district}, {location.country}
                                </div> 
                                : <h3 className='text-purple-800'>Add Location</h3>}
                            </span>
                            <IoMdArrowDropdown className='text-purple-800 cursor-pointer' onClick={toggle} />

                            {
                                openTost ? <div className='w-[250px] h-fit bg-white z-40 shadow-2xl absolute top-10 border-2 p-5 border-gray-100 rounded-md'>
                                    <h1 className='font-semibold mb-4 text-lg flex justify-between items-center'>Change Locatoin <span><CgClose className='cursor-pointer' onClick={toggle}></CgClose></span></h1>
                                    <button className='bg-red-700 text-white px-3 py-1 rounded-lg cursor-pointer' onClick={getLocation}>Detect my location</button>

                                </div> : null
                            }
                        </div>
                    </div>

                    {/* menu section */}
                    <nav className='flex gap-7'>
                        <ul className='flex items-center gap-5 font-semibold text-lg'>
                            <NavLink to='/' className={({ isActive }) => `${isActive ? "border-b-3 transition-all text-purple-800 border-purple-800" : "text-black"} cursor-pointer`} ><li>Home</li></NavLink>

                            <NavLink to='/products' className={({ isActive }) => `${isActive ? "border-b-3 transition-all text-purple-800  border-purple-800" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>

                            <NavLink to='/about' className={({ isActive }) => `${isActive ? "border-b-3 transition-all text-purple-800  border-purple-800" : "text-black"} cursor-pointer`}><li>About</li></NavLink>

                            <NavLink to='/contact' className={({ isActive }) => `${isActive ? "border-b-3 transition-all text-purple-800  border-purple-800" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>

                        </ul>

                        {/* cart section */}
                        <div className='flex items-center gap-5'>
                            <Link to='/cart'>
                                <div className='cart relative hover:text-purple-800'>
                                    <BsCart3 className='h-7 w-7' />
                                    <span className='absolute bg-red-700 px-1.5 rounded-full text-white -top-2 -end-3'>5</span>
                                </div>
                            </Link>
                           
                        </div>
                        {/* sign in and sign out section */}
                        <div>
                            <SignedOut >
                                <SignInButton className='text-lg py-1.5 px-3.5 rounded-xl bg-purple-800 text-white cursor-pointer' />
                            </SignedOut>
                            <SignedIn >
                                <UserButton className='text-lg py-1.5 px-3.5 rounded-xl bg-purple-800 text-white cursor-pointer' />
                            </SignedIn>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar