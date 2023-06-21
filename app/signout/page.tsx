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

    // Clean up the timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, [router]);
  // const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //     <div className='container text-center flex flex-col h-screen justify-center items-center'> 
  //       <span className=''> Signed in as {session.user.email} </span><br />
  //       {/* <button onClick={() => signOut()}>Sign out</button> */}
  //       <button onClick={() => signOut()} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Out</button>

  //     </div>
  //       {/* <div className="w-full bg-white py-10">
  //   <div className="mx-auto max-w-md space-y-4 rounded px-10 py-12 text-black "> 
  //     <p className="text-center lg:md:text-4xl sm:text-3xl font-extrabold mx-auto text-blue-500">FashionsDB</p>
  //     <h2 className="text-center text-2xl">Sign In</h2>
  //     <form action="" className="mx-auto space-y-4">
  //       <div className="space-y-2">
  //         <label  className="block text-sm font-medium">Username or Email</label>
  //         <input type="email" name="" id="email" className="block h-10 w-full rounded border p-2 shadow" placeholder="messi@example.com"/>
  //         <label  className="block text-sm font-medium">password</label>
  //         <input type="password" name="" id="password" className="block h-10 w-full rounded border p-2 shadow" placeholder="password"/>
  //       </div>
  //       <div className="flex justify-end">
  //           <Link href={'#'} className="text-sm font-medium text-blue-600">Forgot Password?</Link>
  //       </div>
  //       <div className="space-y-4">
  //         <button type="submit" className="w-full rounded bg-blue-600 px-4 py-2 text-white">
  //           Sign in
  //         </button>
  //         <p className="text-center text-sm font-medium">
  //           Don't have an account?
  //           <Link href="/signup" className="text-sm font-medium text-blue-600">Sign Up</Link>
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  //   </div> */}
  //     </>
  //   )
  // }
  // return (
  //   <>
  //   <div className='container text-center flex flex-col h-screen justify-center items-center'> 

  //     <span className='text-red-600 text-4xl'>Not signed in </span> <br />
  //     <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={() => signIn()}>Sign in</button>
  //   </div>
  //   </>
  // )
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
{/* Same as */}
<ToastContainer />
  <div className='h-screen text-5xl text-blue-500 flex justify-center items-center'>Redirecting...</div>
    {/* <div className="mx-auto max-w-md space-y-4 rounded px-10 py-12 text-black "> 
      <p className="text-center lg:md:text-4xl sm:text-3xl font-extrabold mx-auto text-blue-500">FashionsDB</p>
      <h2 className="text-center text-2xl">Sign In</h2>
      <form action="" className="mx-auto space-y-4">
        <div className="space-y-2">
          <label  className="block text-sm font-medium">Username or Email</label>
          <input type="email" name="" id="email" className="block h-10 w-full rounded border p-2 shadow" placeholder="messi@example.com"/>
          <label  className="block text-sm font-medium">password</label>
          <input type="password" name="" id="password" className="block h-10 w-full rounded border p-2 shadow" placeholder="password"/>
        </div>
        <div className="flex justify-end">
            <Link href={'#'} className="text-sm font-medium text-blue-600">Forgot Password?</Link>
        </div>
        <div className="space-y-4">
          <button type="submit" className="w-full rounded bg-blue-600 px-4 py-2 text-white">
            Sign in
          </button>
          <p className="text-center text-sm font-medium">
            Don't have an account?
            <Link href="/signup" className="text-sm font-medium text-blue-600">Sign Up</Link>
          </p>
        </div>
      </form>
    </div> */}
    </div>


     </>
   )
}

export default Login
