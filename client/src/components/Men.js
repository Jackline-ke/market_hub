import React from "react";

function Men({product, handleClick, isInCart}){
    return(
        <div id="men">
            <div className="border-t-2 border-gray-100"></div>
            <div className="mt-4 ml-4">
                <h1 className="font-bold text-2xl ">Men</h1>
            </div>
            <div className="border-t-2 border-yellow-400 w-32 ml-4 mt-2"></div>
            <div className="grid grid-cols-5 gap-2 mb-16 ml-4 pt-8">
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/5a/f5/5d/5af55d09fade358b062f8c3d7c56306a.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">African Men Clothing</h1>
                            <p className="pt-2 text-sm text-gray-500">African men clothing, 2pics<br/> men sets and cotton fabric</p>
                            <h2 className="font-bold ml-16 pt-2">$ 40</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/6b/da/9f/6bda9f30086f90d2bcfc79d0d27fcb19.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Casual</h1>
                            <p className="pt-2 text-sm text-gray-500">Men <br/> Casual Otfits</p>
                            <h2 className="font-bold ml-16 pt-2">$ 100</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/236x/f8/8d/54/f88d54afb8cf10b8183cce9dff606ee8.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Winter</h1>
                            <p className="pt-2 text-sm text-gray-500">Men<br/> Winter Time</p>
                            <h2 className="font-bold ml-20 pt-2">$ 200</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/1a/05/a7/1a05a79aacf0cdb2bcd2303115e283e6.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Suit</h1>
                            <p className="pt-2 text-sm text-gray-500">Men <br/> Black Suit</p>
                            <h2 className="font-bold ml-20 pt-2">$ 150</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-fit'>
                    <img src='https://i.pinimg.com/564x/0d/a1/13/0da1133b6730b5d8f50c03156b223293.jpg' className="h-80 w-60 rounded-t-lg"/>
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
export default Men;