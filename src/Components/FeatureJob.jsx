import React, { useState } from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeatureJob = ({job}) => {
  

    const {logo,title,company,type,time,location,salary,id}=job
    
    return (
        <div>
            <div className='border rounded-md mx-auto py-6 px-8  shadow-lg space-y-4 h-full'>
                <img className='w-full md:w-2/5 mx-auto' src={logo} alt="" />
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <p className='text-gray-700'>{company}</p>
                <div className='flex gap-3 '>
                <p className='border-2 border-violet-500 text-violet-600 w-max px-2 rounded-md py-1'>{type}</p>
                <p className='border-2 border-violet-500 text-violet-600 w-max px-2 rounded-md py-1'>{time}</p>
           </div>
           <div className='flex flex-col md:flex-row gap-5'>
           <p className='inline-flex items-center gap-1'><MapPinIcon className="h-6 w-6 text-gray-500" />{location}</p>
           <p className='inline-flex items-center gap-1 '><CurrencyDollarIcon className="h-6 w-6 text-gray-500" />{salary}</p>
           </div>
         <div>
         <Link to={`/${id}`}>
         <button  className='bg-violet-500 px-2 py-2 mt-4 rounded text-white' >View Details</button>
         </Link>
         </div>
            </div>
        </div>
    );
};

export default FeatureJob;

