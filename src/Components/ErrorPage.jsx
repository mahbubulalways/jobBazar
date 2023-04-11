import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import errorLogo from "../assets/76705-error-animation.json";

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 '>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
     <div className='w-full md:w-1/3'>
     <Lottie animationData={errorLogo} loop={true} />;
     </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-9xl  text-red-700'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-gradient-to-r from-blue-500 to-violet-500  text-white'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage



