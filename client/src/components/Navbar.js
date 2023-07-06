import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
        <div className="n-wrapper p-4">
            <div className="n-left ml-16">
                <div className="logo">marketHub</div>
            </div>
            <div className="n-right flex">
                <div className="n-list mr-16">
                    <ul className="flex">
                        <li>Home</li>
                        <li className="ml-8">Categories</li>
                        <li className="ml-8">Cart</li>
                    </ul>
                </div>
                <button className="button mr-16 border border-black py-2 px-4 rounded-lg">Sign Up</button>
            </div>
        </div> 
    )
}
export default Navbar;