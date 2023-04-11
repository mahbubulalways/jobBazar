import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJob from './ShowAppliedJob';

const AppliedJob = () => {
    const jobData=useLoaderData()
    const [allData,setData]=useState([])
    const [onsiteData,setOnsite]=useState([])
    const [remoteData,setRemote]=useState([])
       useEffect(()=>{
        const saveCart=[]
        const storedJob=getShoppingCart()
        for(const id in storedJob){
            const findData=jobData.find(data=>data.id=== parseInt(id))
           if(findData){
            saveCart.push(findData)
           }
        }
        setData(saveCart)
        setOnsite(saveCart)
        setRemote(saveCart)

    },[])

const showRemote=()=>{
    const remote=remoteData.filter(data=>data.type==="Remote")
    setData(remote)
}

const showOnsite=()=>{
    
    const onsite=onsiteData.filter(data=>data.type==="Onsite")
    setData(onsite)
    console.log(allData);
}


    return (
        <div className=' mx-auto '>
            <h1 className='text-2xl font-semibold text-center bg-violet-50 py-10'>Applied Jobs</h1>
            <div className='flex justify-center mt-10 gap-5'>
            <button onClick={()=>showRemote()} className='bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 rounded text-white'>Remote Jobs</button>
            <button onClick={()=>showOnsite()} className='bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 rounded text-white'>Onsite Jobs</button>
            </div>
            <div className='w-[80%] mx-auto mt-10'>
                {allData.map(data=><ShowAppliedJob
                data={data}
                key={data.id}
                ></ShowAppliedJob>)}

            </div>
           

        </div>
    );
};

export default AppliedJob;