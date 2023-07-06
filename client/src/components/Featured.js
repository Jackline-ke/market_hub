import React, { useEffect } from "react";
import "./Featured.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Featured(){
    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])

    return(
        <div id="featured">
            <div className="flex justify-center">
                <h1 data-aos="fade-up" className="f-title font-bold text-4xl pt-16 mb-8">Featured Products</h1>
            </div>
            <div data-aos="zoom-in" className="p-8 flex">
                <div className='phone'>
                    <img src='https://i.pinimg.com/236x/e4/39/89/e439896ca261671d3e98607ec5c93fc1.jpg' className="h-80 w-48"/>
                    <div className="flex justify-center pt-2">
                        <h1>Phones</h1>
                    </div>
                </div>
                <div className='groceries'>
                    <img src='https://i.pinimg.com/236x/6d/61/52/6d6152af6f9df4d2ebc1de480bc89492.jpg' className="h-80 w-48 ml-8"/>
                    <div className="flex justify-center pt-2">
                        <h1>Groceries</h1>
                    </div>
                </div>
                <div className='tv h-96'>
                    <img src='https://i.pinimg.com/236x/84/5a/2f/845a2fb64fba343b802393d62bbab889.jpg' className="h-80 w-48 ml-8"/>
                    <div className="flex justify-center pt-2">
                        <h1>TV</h1>
                    </div>
                </div>
                <div className='women'>
                    <img src='https://i.pinimg.com/236x/ba/47/4f/ba474f0bd4441ec1baccd16778c37b0f.jpg' className="h-80 w-48 ml-8"/>
                    <div className="flex justify-center pt-2">
                        <h1>Women's Fashion</h1>
                    </div>
                </div>
                <div className='men'>
                    <img src='https://i.pinimg.com/564x/28/18/9a/28189a32d2cfcbee8f80e8bfe8f6d84f.jpg' className="h-80 w-48 ml-8"/>
                    <div className="flex justify-center pt-2">
                        <h1>Men's Fashion</h1>
                    </div>
                </div>
                <div className='perfumes'>
                    <img src='https://i.pinimg.com/236x/ef/11/61/ef1161fe3fe7bf78dedf753a8672ace7.jpg' className="h-80 w-48 ml-8"/>
                    <div className="flex justify-center pt-2">
                        <h1>Beauty & Perfumes</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured;