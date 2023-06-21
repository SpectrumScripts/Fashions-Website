"use client"
import Link from 'next/link'
import React,{ useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const router = useRouter();
  toast.success('You are Successfully sign out', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  useEffect(() => {
    // Redirect to a different page after a delay of 2 seconds
    const timeout = setTimeout(() => {
      router.push('http://localhost:3000/');
      
    }, 4000);

    return () => clearTimeout(timeout);
  }, [router]);
 
   return (
     <>
  <div className="w-full bg-white py-10">
  <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>
<ToastContainer />
  <div className='h-screen text-5xl text-blue-500 flex justify-center items-center'>Redirecting...</div>
   
    </div>


     </>
   )
}

export default Login
