import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Blog from './Components/Blog';
import JobDetails from './Components/JobDetails';
import AppliedJob from './Components/AppliedJob';
import Statistics from './Components/Statistics';
import ErrorPage from './Components/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: async()=>{
          const jobCategory =  await (await fetch("data.json")).json()
          const featureJob= await (await fetch("job.json")).json()
          return {jobCategory, featureJob}
        },
        
      },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
        loader: async ({params})=>(params)
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader:()=>fetch('chart.json')
      },
      {
        path: "/applied-job",
        element:<AppliedJob></AppliedJob>,
        loader:()=>fetch('job.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
