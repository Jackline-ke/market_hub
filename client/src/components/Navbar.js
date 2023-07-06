import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
        <div className="n-wrapper p-4">
            <div className="n-left ml-16 pt-4">
                <div className="logo">marketHub</div>
            </div>
            <div className="n-right flex">
                <div className="n-list mr-16 pt-4">
                    <ul className="flex">
                        <li>Home</li>
                        <li className="ml-8">Categories</li>
                        <li className="ml-8">Cart</li>
                    </ul>
                </div>
                <div className="mr-16">
                    <button className='bg-yellow-400 shadow-lg shadow-yellow-500/50 p-2 w-28 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white'>Sign Up</button>
                </div>
            </div>
        </div> 
    )
}
export default Navbar;