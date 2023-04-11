import React from 'react';
 import facebook from '../../images/fb.png'
 import twitter from '../../images/twitter.png'
 import youtube from '../../images/youtube.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className=' w-[80%] mx-auto'>
            <div className='text-gray-300 mt-10 py-12'>
           <div className=' grid grid-cols-2 md:grid-cols-5 gap-8 '>
           <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'>JobBazar</h1>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex gap-3 items-center'>
                <Link> <img src={facebook} alt="" /></Link>  
                <Link> <img src={twitter} alt="" /></Link>  
                <Link> <img src={youtube} alt="" /></Link>  
                </div>
            </div>
            <div className='flex flex-col space-y-1'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <Link>About Us</Link>
                <Link>Work</Link>
                <Link>Latest News</Link>
                <Link>Careers</Link>
            </div>
            <div className='flex flex-col  space-y-1'>
                <h1 className='text-xl font-semibold'>Product</h1>
                <Link>Prototype</Link>
                <Link>Plans & Pricing</Link>
                <Link>Customers</Link>
                <Link>Integrations</Link>
            </div>
            <div className='flex flex-col  space-y-1'>
                <h1 className='text-xl font-semibold'>Support</h1>
                <Link>Help Desk</Link>
                <Link>Sales</Link>
                <Link>Help Desk</Link>
                <Link>Developers</Link>
            </div>
            <div className=' space-y-1'>
            <h1 className='text-xl font-semibold'>Contact</h1>
                <p>524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
            </div>
           </div>
          
        </div>
        <div className='border-t-2 '>
        <div className='text-gray-300  flex justify-between py-12'>
        <h1 className=''>@2023 JobBazar. All Rights Reserved</h1>
        <h1>Powered by JobBazar</h1>
        </div>

        </div>
        </div>
        </div>
    );
};

export default Footer;