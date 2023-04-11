import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [bar,setBar]=useState(false)
    return (
        <div className='bg-violet-50 sticky top-0 z-10'>
           <div  className='w-[80%] mx-auto flex  justify-between items-center py-3  '>
           <div>
                <h1 className='text-2xl font-semibold'>JobBazar</h1>
            </div>
            <div className='space-x-5 text-lg hidden lg:block'>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/statistics"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Statistics
                </NavLink>
                <NavLink
                    to="/applied-job"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Applied Jobs
                </NavLink>
                <NavLink
                    to="/blog"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Blog
                </NavLink>
            </div>
            <div>
                <button className='bg-gradient-to-r from-blue-500 to-violet-500 px-2 py-2 rounded text-white hidden lg:block'>Start Applying</button>
            </div>
            <div className='flex justify-end sm:block lg:hidden'>
            <button className='bg-gray-500 px-2 py-1 rounded-md' onClick={()=>setBar(!bar)}>
                <span>
                    {bar ?  
                 <XMarkIcon className="h-8 w-8 text-white" />
             : <Bars3Icon className="h-8 w-8 text-white" />
            }
            </span>
            </button>
       </div>
           </div>
           <span>
           {  <div className={`flex flex-col text-lg pl-10 absolute  border-2 border-b-slate-300 rounded-md duration-500 py-5 space-y-5 pr-4 bg-violet-100 lg:hidden sm:block ${bar ? 'left-0' : '-left-full'}`} >
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/'>Home</Link>
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/statistics'>Statistics</Link>
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/applied-job'>Applied Jobs</Link>
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/blog'>Blog</Link>
            <button className='bg-gradient-to-r from-blue-500 to-violet-500 px-2 py-2 rounded text-white'>Start Applying</button>
           </div>}
           </span>
           
       
        </div>
    );
};

export default Navbar;