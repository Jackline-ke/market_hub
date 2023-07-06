import React from "react";
import beauty from "../assests/beauty.png"
import {TypeAnimation} from "react-type-animation"

function Offer(){
   
    return(
        <div className="p-8">
            <div className="flex justify-center">
                <h1 className="f-title font-bold text-4xl mb-8">Offers</h1>
            </div>
            <div className="h-56 w-full bg-yellow-400 flex rounded-lg shadow-lg shadow-yellow-500/50 mb-4">
                <div >
                    <img src={beauty} alt="beauty" className="h-60 w-72 rounded-lg"/>
                </div>
                <div className="ml-72 pt-8">
                    <h1 className="font-bold font-serif text-white text-4xl">Hurry Up!!</h1>
                    <h1 className="font-bold text-white text-4xl">And Get Amazing Offers</h1><br/>
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
                <div className="h-48 w-full bg-yellow-400 bg-yellow-400 flex rounded-lg shadow-lg shadow-yellow-500/50"></div>
                <div className="h-48 w-full bg-yellow-400 ml-8 bg-yellow-400 flex rounded-lg shadow-lg shadow-yellow-500/50"></div>
            </div>
        </div>
    )
}
export default Offer;