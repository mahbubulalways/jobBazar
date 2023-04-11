import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const ShowAppliedJob = ({data}) => {
    console.log(data);
    const {title,logo,company,type,time,location,salary,id}=data
    return (
        <div className=' border w-fit grid grid-cols-1 md:grid-cols-2 items-center   rounded-md my-5 py-6  px-5'>
            <div className='  flex flex-col  md:flex-row items-center gap-5 py-2'>
                <img className='w-full md:w-2/5 ' src={logo} alt="" />
               <div className='space-y-3'>
               <h1 className='text-2xl font-semibold'>{title}</h1>
               <p>{company}</p>
               <div className='flex items-center gap-2'>
               <p className='border-2 border-violet-500 text-violet-600 w-max px-3 rounded-md py-1'>{type}</p>
                <p className='border-2 border-violet-500 text-violet-600 w-max px-2 rounded-md py-1'>{time}</p>
               </div>
               <div className='flex flex-col gap-5'>
           <p className='inline-flex items-center gap-1'><MapPinIcon className="h-6 w-6 text-gray-500" />{location}</p>
           <p className='inline-flex items-center gap-1 '><CurrencyDollarIcon className="h-6 w-6 text-gray-500" />{salary}</p>
           
           </div>
           
        </div>
       
            </div>

           <div>
           <p className=' w-max mx-auto text-center bg-gradient-to-r from-blue-500 to-violet-500 px-2 py-2 rounded text-white'> <Link to={`/${id}`}>View Details</Link></p>
           </div>
         </div>
    );
};

export default ShowAppliedJob;

