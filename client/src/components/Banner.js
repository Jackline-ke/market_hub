import React from "react";
import "./Banner.css"
import vector1 from "../assests/Vector1.png";
import vector2 from "../assests/Vector2.png";
import fruit from "../assests/fruits.png";
import {Link} from "react-scroll"
// import glasses from "../assests/glassesimoji.png"

function Banner(){
    return(
        <div className="banner">
            <div className="b-left ml-16">
                <div className="b-title">
                    <span>Welcome to</span>
                    <span>marketHub</span>
                    <span className="mt-6">Are you tired of the hassle of traditional shopping? Ready to embrace
                        the convenience and excitement of online shopping? Look no further! Coz marketHub gatchu!! </span>
                </div>
                <div>
                    <Link smooth={true} to="featured">
                        <button className='mt-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 p-2 w-28 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white'>Shop now</button>
                    </Link>
                </div>
            </div>
            <div className="b-right ml-16">
                <img src={vector1} alt="vector1"/>
                <img src={vector2} alt="vector2"/>
                <img src={fruit} alt="fruit"/>
            </div>
        </div>
    )
}
export default Banner;