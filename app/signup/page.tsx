import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <>
    
  <div className="w-full h-[90vh] items-center bg-white py-10">
    <div className="mx-auto max-w-md space-y-4 rounded px-10 py-12 text-black ">
      <p className="text-center lg:md:text-4xl sm:text-3xl font-extrabold mx-auto text-blue-500">FashionsDB</p>
      <h2 className="text-center text-2xl">Sign Up</h2>
      <form action="" className="mx-auto space-y-4">
        <div className="space-y-2">
          <label  className="block text-sm font-medium">Username or Email</label>
          <input type="email" name="" id="email" className="block h-10 w-full rounded border p-2 shadow" placeholder="messi@example.com"/>
          <label  className="block text-sm font-medium">password</label>
          <input type="password" name="" id="password" className="block h-10 w-full rounded border p-2 shadow" placeholder="password"/>
        </div>
        <div className="flex justify-end">
          
          <div className="">
            <a href="" className="text-sm font-medium text-blue-600">Forgot Password?</a>
          </div>
        </div>
        <div className="space-y-4">
          <button type="submit" className="w-full rounded bg-blue-600 px-4 py-2 text-white">
            Sign Up
          </button>
          <p className="text-center text-sm font-medium">
            Already have an account?
            <Link href="/signin" className="text-sm font-medium text-blue-600">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
    </div>


    </>
  )
}

export default Signup
