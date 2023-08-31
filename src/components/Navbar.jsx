import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex w-full flex-col justify-center items-center md:flex-row md:justify-between px-20 py-6 shadow-xl'>
            <div>
                <NavLink to={"/"}>
                    <img src="/logo.svg" alt="" />
                </NavLink>
            </div>

            <ul className='flex flex-col md:flex-row md:gap-x-5 text-xl font-medium '>

                <NavLink to={"/"}>
                    <li className='hover:border-b-black hover:border-b-2 max-md:pt-5'>Home</li>
                </NavLink>

                <NavLink to={"/about"}>
                    <li className='hover:border-b-black hover:border-b-2 max-md:pt-5'>About</li>
                </NavLink>
            </ul>
        </nav>
    )

    // return (
    //     <nav className='flex flex-col sm:flex-row justify-between sm:h-20 px-5 sm:px-20 py-3 sm:py-6 shadow-xl'>
    //       <div className='mb-3 sm:mb-0'>
    //         <NavLink to={"/"}>
    //           <img src="/logo.svg" alt="" />
    //         </NavLink>
    //       </div>
      
    //       <ul className='flex flex-col sm:flex-row gap-2 sm:gap-x-5 text-base sm:text-xl font-medium'>
    //         <NavLink to={"/"} className='hover:border-black hover:border-b-2'>
    //           <li className='mb-2 sm:mb-0'>Home</li>
    //         </NavLink>
      
    //         <NavLink to={"/about"} className='hover:border-black hover:border-b-2'>
    //           <li className='mb-2 sm:mb-0'>About</li>
    //         </NavLink>
    //       </ul>
    //     </nav>
    //   )
      
}

export default Navbar