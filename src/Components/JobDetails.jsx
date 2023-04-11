import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon , PhoneIcon,EnvelopeIcon,BriefcaseIcon} from '@heroicons/react/24/solid'
import { addToDb } from '../utilities/fakedb';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const paramsId=useParams()
  const [jobs,setJob]=useState([])

     useEffect(()=>{
    fetch('job.json')
    .then(res=>res.json())
    .then(data=>setJob(data))
  },[])



 

const handleToAdd=(jobData)=>{
  addToDb(jobData.id) 
  toast("successful to apply");
}

if(jobs.length <1 ){
  return
} ;

  
   const getId= parseInt( paramsId.id)
   const  getData=jobs.find(job=>job.id === getId)
   const {title,description,responsibility,requirements,experiences ,salary,phone,email,address}=getData
 return (
        <div>
          <h1 className='text-2xl font-semibold text-center bg-violet-50 py-10'>Job Details</h1>
          <div className='w-[80%] mx-auto mt-20 flex md:flex-row flex-col gap-8'>
   
   <div className='space-y-5 e-full md:w-2/3'>
     <h1 className=''><span className='font-semibold text-lg'>Job Description:</span> {description}</h1>
     <h1 className='text-lg'><span className='font-semibold'>Job Responsibility:</span> {responsibility}</h1>
     <h1 className='text-lg'><span className='font-semibold'>Educational Requirements:</span> {requirements}</h1>
     <h1 className='text-lg'><span className='font-semibold'>Experiences:</span> {experiences}</h1>
   </div>
   <div className='w-full md:w-1/3   px-8 bg-violet-50 rounded-md py-5'>
     <h1 className='text-xl pb-5  font-semibold border-b-2 border-violet-200'>Job Details</h1>
     <div className='mt-4 space-y-2'>
    <p className='inline-flex items-center gap-1 '><CurrencyDollarIcon className="h-5 w-5 text-violet-500" /><span className='font-semibold'>Salary :</span>{salary}</p>
    <p className='inline-flex items-center gap-1 '><BriefcaseIcon className="h-5 w-5 text-violet-500" /><span className='font-semibold'>Job Title :</span>{title}</p>
    </div>
    <div className='mt-5'>
   <h1 className='text-xl font-semibold border-b-2 border-violet-200 pb-5'>Contact Information</h1>
  <div className='space-y-2 mt-5'>
   
  <p className='inline-flex items-center gap-1 '><PhoneIcon className="h-4 w-4 text-violet-500" /><span className='font-semibold'> Phone : </span>{phone}</p>
   <p className='inline-flex items-center gap-1 '><EnvelopeIcon className="h-4 w-4 text-violet-500" /><span className='font-semibold'> Email : </span>{email}</p>
   <div className='flex  gap-1'>
   <MapPinIcon className="h-6 w-6 text-violet-500" />
   <p className='  gap-1'><span className='font-semibold'>Address :</span>{address}</p>
   
   </div>
   <button onClick={()=>handleToAdd(getData)} className='bg-gradient-to-r from-blue-500 to-violet-500 text-white px-3 py-2 w-full rounded-md'>Apply Now</button>
  </div>
  </div>
  </div>
  
 </div>
        </div>
    );
};

export default JobDetails;