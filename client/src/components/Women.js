import React from "react";

function Women({product, handleClick, isInCart}){
    return(
        <div id="women">
            <div className="border-t-2 border-gray-100"></div>
            <div className="mt-4 ml-4">
                <h1 className="font-bold text-2xl ">Women</h1>
            </div>
            <div className="border-t-2 border-yellow-400 w-32 ml-4 mt-2"></div>
            <div className="grid grid-cols-5 gap-2 mb-16 ml-4 pt-8">
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/89/51/2e/89512ed0bd29226383205ecbd78bea2a.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Ankara Dress</h1>
                            <p className="pt-2 text-sm text-gray-500">Women's Chic Elegant V-Neck <br/>Sling Open Back Swing Dress</p>
                            <h2 className="font-bold ml-16 pt-2">$ 40</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/98/2a/c1/982ac1f15831a4676951d12c0f55ae95.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Floral</h1>
                            <p className="pt-2 text-sm text-gray-500">Floral Print Draped Detail Puff <br/>Lantern Sleeve Bodycon Dress</p>
                            <h2 className="font-bold ml-16 pt-2">$ 100</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/d0/4d/99/d04d99d3785d139ec1b8e7516b08e347.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Black Dress</h1>
                            <p className="pt-2 text-sm text-gray-500">Short Black Dress <br/> Summer Time</p>
                            <h2 className="font-bold ml-20 pt-2">$ 60</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/ef/f0/ba/eff0bacf31b392025f721a218c391e68.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Jumpsuit</h1>
                            <p className="pt-2 text-sm text-gray-500">Women's Jumpsuit Lace up <br/> Solid Color V Neck Streetwear</p>
                            <h2 className="font-bold ml-20 pt-2">$ 150</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-fit'>
                    <img src='https://i.pinimg.com/236x/58/d0/aa/58d0aa4e0e5533eb1dc40242a36d2a0d.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Two Piece</h1>
                            <p className="pt-2 text-sm text-gray-500">Two Piece Sleeveless Top <br/> Casual Wide Leg Pant Set</p>
                            <h2 className="font-bold ml-20 pt-2">$ 120</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Women;