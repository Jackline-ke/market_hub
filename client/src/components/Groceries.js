import React from "react";

function Groceries({product, handleClick, isInCart}){
    return(
        <div id="groceries">
            <div className="border-t-2 border-gray-100"></div>
            <div className="mt-4 ml-4">
                <h1 className="font-bold text-2xl ">Groceries</h1>
            </div>
            <div className="border-t-2 border-yellow-400 w-32 ml-4 mt-2"></div>
            <div className="grid grid-cols-5 gap-2 mb-16 ml-4 pt-8">
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Orange</h1>
                            <p className="pt-2 text-sm text-gray-500">400g - Approx 7 pieces per KG</p>
                            <h2 className="font-bold ml-16 pt-2">$ 1.5</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/90/8e/44/908e44160816a22ba0dd21acd95952ac.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Tomatoes</h1>
                            <p className="pt-2 text-sm text-gray-500">500g - Approx 7 pieces per KG</p>
                            <h2 className="font-bold ml-16 pt-2">$ 0.34</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/70/f9/c0/70f9c0bc665c527b501d6ec678d180fb.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Watermelon</h1>
                            <p className="pt-2 text-sm text-gray-500">1.3KG - Approx 1 piece per KG</p>
                            <h2 className="font-bold ml-20 pt-2">$ 2.5</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60'>
                    <img src='https://i.pinimg.com/564x/d8/43/ad/d843ad360d8f7615452b80b4bb725019.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Maize Corn</h1>
                            <p className="pt-2 text-sm text-gray-500">400g - Approx 4 pieces per KG</p>
                            <h2 className="font-bold ml-20 pt-2">$ 4.6</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
                <div className='border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-fit'>
                    <img src='https://i.pinimg.com/564x/6b/9e/3b/6b9e3bcde668351dbb1a800c03a82567.jpg' className="h-80 w-60 rounded-t-lg"/>
                    <div className="flex justify-center pt-4">
                        <div>
                            <h1 className="font-bold ml-16">Cabbage</h1>
                            <p className="pt-2 text-sm text-gray-500">1.3KG - Approx 1 piece per KG</p>
                            <h2 className="font-bold ml-20 pt-2">$ 1200</h2>
                            <button className='add-to-cart mb-8 mt-4 ml-8 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Groceries;