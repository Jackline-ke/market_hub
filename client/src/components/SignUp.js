import React from "react";
import fruit from "../assests/fruits.png"
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-fit w-full p-16'>
            <div className="hidden sm:block h-96 bg-yellow-200">
                <img className="w-full object-cover"src={fruit} alt=""></img>
            </div>
            <div className="bg-yellow-400 flex flex-col justify-center">
                <form className='max-w-[400px] w-full mx-auto bg-yellow-200 p-8 px-8 rounded-lg mt-8 mb-8'>
                    <h2 className='text-4x1 dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label className="text-black">Name</label>
                        <input className='rounded-lg bg-white mt-2 p-2 focus:border-yellow-500 focus:bg-yellow-400 focus:outline-none' type="text"/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor="email" className="text-black">Email</label>
                          <input
                                id="email"
                                className="p-2 rounded-lg bg-white mt-2 p-2 focus:border-yellow-500 focus:bg-yellow-400 focus:outline-none"
                                type="email"
                                placeholder="Enter your email"
                           />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label className="text-black">Password</label>
                        <input className="p-2 rounded-lg bg-white mt-2 p-2 focus:border-yellow-500 focus:bg-yellow-400 focus:outline-none" type="password"/>
                    </div>
                    <div className="flex justify-between text-gray-900 py-2">
                        <p className="flex items-cebter"><input className="mr-2"type="checkbox" />Remember Me</p>
                        <p>Forgot Password</p>
                    </div>
                    <Link to="/Login">
                        <button className='w-full my-5 py-2 bg-yellow-400 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/40 text-white font-semibold rounded-lg'>Create Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}