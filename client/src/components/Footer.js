import React from 'react';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './Socialicons';
import { Icons } from './Menu'; 


const Footer = () => {
    return (
        <footer className="rgb:f5c32c">
            <div className = "md:flex md:justify-between md:items_center sm:px-12">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">

                    <span className="text-teal-400 text-yellow-400">MarketHub</span>: the place you would rather be
                </h1>
                <div>
                    <input type="text" placeholder="Enter Your ph.no" className="text-gray-800
                    sm:w-72 w-full sm:mr-5 mr-1 1g:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"></input>

                    <button className="bg-yellow-400 hover:bg-gray-500 duration-300 px-5 py-2.5 font-Poppins rounded-md text-white md:w-auto w-full">

                        Request Code

                    </button>
                </div>
            </div>
            <ItemsContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>All rights reserved.</span>
                <span>Terms  . Privacy Policy </span>
                <SocialIcons Icons ={Icons} /> 
            </div>
        </footer>
    )
}

export default Footer