import React, { useState } from 'react';
import image from '../../images/hardy.png'
import { useLoaderData } from 'react-router-dom';
import JobCatagory from './JobCatagory';
import FeatureJob from './FeatureJob';
const Home = () => {
    const allData = useLoaderData();
    const {jobCategory ,featureJob}=allData
    const cutData=featureJob.slice(0,4)
    const [data,setAllData]=useState(cutData)
    const [btn,setBtn]=useState(true)

    console.log(data);
    const handleShowAll=()=>{
        setAllData(featureJob)
        setBtn(false)
    }
    return (
        
        <div>
            <div className='bg-violet-50'>
       <div  className='w-[80%] mx-auto '>
       <div className='flex md:flex-row flex-col-reverse justify-center gap-5 items-center p-8 md:p-0'>
            <div className='space-y-4'>
            <h1 className='text-6xl font-semibold'>One Step</h1>
            <h1  className='text-6xl font-semibold'>Closer To Your</h1>
            <h1 className='text-violet-500 text-6xl font-semibold'> Dream Job</h1>
            <p>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 rounded text-white'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={image} alt="" />
            </div>
        </div>
       </div>
        </div>
        <section className='w-[80%] mx-auto mt-20'>
            <div className='text-center  space-y-2'>
                <h1 className='text-4xl font-semibold '>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-10 gap-5'>
            {jobCategory.map(data=><JobCatagory
            data={data}
            key={data.id}
            ></JobCatagory>)}
            </div>
        </section>
        <section className='w-[80%] mx-auto mt-20'>
        <div className='text-center  space-y-2'>
                <h1 className='text-4xl font-semibold '>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto mt-10 gap-8'>
                {data.map(job=><FeatureJob
                job={job}
                key={job.id}
                >
                </FeatureJob>)} 
                 </div>
        </section>
       <div className='text-center mt-8'>
      {btn &&  <button onClick={()=>handleShowAll()} className='bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 rounded text-white'>See All Jobs</button>}
       </div>
        </div>
    );
};

export default Home;