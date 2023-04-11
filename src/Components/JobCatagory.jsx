import React from 'react';

const JobCatagory = ({data}) => {
    const {image,name,job}=data
    return (
          <div className=' px-5 py-5 bg-violet-50 rounded-md shadow-md'>
            <img className='w-1/3 mx-auto' src={image} alt="" />
            <h1 className='mt-5 text-lg font-semibold'>{name}</h1>
            <p>{job}</p>
        </div>
    );
};

export default JobCatagory;