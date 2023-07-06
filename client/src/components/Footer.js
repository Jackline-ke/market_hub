import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">


        
            <div className = "md:flex md:justify-between md:items_center sm:px-12">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">

                    <span className="text-teal-400">Free</span> until you're ready to launch
                </h1>
                <div>
                    <input type="text" placeholder="Enter Your ph.no" className="text-gray-800
                    sm:w-72 w-full sm:mr-5 mr-1 1g:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"></input>

                    <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-Poppins rounded-md text-white md:w-auto w-full">

                        Request Code

                    </button>
                </div>

                 



            </div>
        </footer>
    )
}