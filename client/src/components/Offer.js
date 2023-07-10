import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import beauty from "../assests/beauty.png"
import {TypeAnimation} from "react-type-animation"
import female from "../assests/female.png"
import male from "../assests/male.png"

function Offer(){
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])
   
    return(
        <div className="p-8">
            <div className="h-56 w-full bg-yellow-400 flex rounded-lg shadow-lg shadow-yellow-500/50 mb-4">
                <div >
                    <img src={beauty} alt="beauty" className="h-60 w-72 rounded-lg"/>
                </div>
                <div data-aos="fade-down" className="ml-72 pt-8">
                    <h1 className="font-bold text-black text-4xl">Hurry Up!!</h1>
                    <h1 className="font-bold text-black text-4xl">And Get Amazing Offers</h1><br/>
                    <TypeAnimation sequence={[
                        'From 10%',
                        2000,
                        'To 30%',
                        2000,
                        ]}
                        speed={50}
                        className="font-bold text-white text-4xl"
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div className="flex">
                <div data-aos="fade-right" className="h-48 w-full border border-yellow-400 flex rounded-lg shadow-lg shadow-yellow-500/50">
                    <div>
                        <img src={female} alt="female" className="h-48"/>
                    </div>
                    <div className="ml-16 mr-12 pt-12">
                        <p className="font-bold text-xl">Be a cherry on pie in every situaion with...<br/><span className="text-yellow-400"> marketHub</span></p>
                    </div>
                </div>
                <div data-aos="fade-right" className="h-48 ml-8 w-full border border-yellow-400 flex rounded-lg shadow-lg shadow-yellow-500/50">
                    <div>
                        <img src={male} alt="male" className="h-48 ml-4"/>
                    </div>
                    <div className="ml-16 mr-12 pt-12">
                        <p className="font-bold text-xl">Travelling fashion collection with...<br/><span className="text-yellow-400"> marketHub</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offer;