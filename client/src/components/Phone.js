import React from "react";

function Phone({product, handleClick, isInCart}){
    return(
        <div id="phones">
            <div className="border-t-2 border-gray-100 mt-8"></div>
            <div className="mt-4 ml-4">
                <h1 className="font-bold text-2xl ">Smartphones</h1>
            </div>
            <div className="border-t-2 border-yellow-400 w-32 ml-4 mt-2"></div>
            <div className="grid grid-cols-5 gap-2 mb-16 ml-4 pt-8">
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/236x/e4/39/89/e439896ca261671d3e98607ec5c93fc1.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-8">iPhone 12 Pro Max</h1>
                            <p className="pt-2 text-sm text-gray-500">iPhone 12 Pro Max 2020 Black</p>
                            <h2 className="font-bold ml-20 pt-2">$ 1200</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/a2/b6/ca/a2b6ca75e267d5bc692a1f7814c16616.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-8">Samsung Galaxy S22 </h1>
                            <p className="pt-2 text-sm text-gray-500">Samsung Galaxy S22 from AT&T</p>
                            <h2 className="font-bold ml-20 pt-2">$ 626.33</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-12 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/eb/68/ac/eb68acf6aedcd070b2f9dadd6c9091e2.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-12">Nokia G21</h1>
                            <p className="pt-2 text-sm text-gray-500">Nokia G21 4GB RAM 128GB</p>
                            <h2 className="font-bold ml-16 pt-2">$ 257.05</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-fit'>
                    <img src='https://i.pinimg.com/564x/2f/9a/de/2f9ade985bb38c6abbe548cfb8b0bc69.jpg' className="h-80 w-fit rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-12">Tecno Spark</h1>
                            <p className="pt-2 text-sm text-gray-500 ml-8">Tecno Spark 10 5G</p>
                            <h2 className="font-bold ml-16 pt-2">$ 162.92</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/2a/38/ba/2a38badeecdefc43e5d2c9296f9108d8.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-12">Realme C53</h1>
                            <p className="pt-2 text-sm text-gray-500">Realme C53 128GB 6GB RAM</p>
                            <h2 className="font-bold ml-16 pt-2">$ 200</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Phone;