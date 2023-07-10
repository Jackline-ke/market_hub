// @flow strict
import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="n-wrapper p-4">
        <div className="n-left ml-16 pt-4">
            <div className="logo">marketHub</div>
        </div>
        <div className="n-right">
            <div className="n-list mr-16 pt-4 flex">
                <Link to="/" className='font-bold text-lg'>Home</Link>
                <Link to="/Cart" className='ml-16 font-bold text-lg'>Cart</Link>
                <Link to="/SignUp">
                    <div className="ml-16">
                        <button className='bg-yellow-400 shadow-lg shadow-yellow-500/50 p-2 w-28 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white'>Sign Up</button>
                    </div>
                </Link>
            </div>
        </div>
    </div> 
    );
};

export default Navbar;