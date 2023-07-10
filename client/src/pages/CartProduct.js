// @flow strict

import * as React from 'react';
import { useState } from 'react';

function CartProduct({cartProduct,handleRemove,handleAddCartItem,count,handleReduceCartItem}) {
    /*The following will calculate the price of each cart item*/
    const[price,setPrice]=useState(Number)

    const handlePrice=(price)=>{
       const cartItemCost =parseFloat(cartProduct.price)
       return(
           setPrice(count*cartItemCost)
       )
    }
    
    return (
        <div className='p-16'>
            <div className='cart flex border border-yellow-400 rounded-lg shadow-lg shadow-yellow-500/50 p-8'>
              <div className='image'>
                <img src={cartProduct.image}
                    alt={cartProduct.name}  /> {/* I have added alt attribute*/}
              </div>
            <div className=''>
                <div className='card-description ml-48'>
                    <div className='flex'>
                        <h4 className='font-bold text-2xl'>{cartProduct.name}</h4>
                        <button className="add-to-cart ml-4 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-20 text-xs rounded-full text-white hover:bg-orange-300 hover:text-white" onClick={()=>handleRemove(cartProduct)}>Remove</button>
                    </div>
                    <p className='pt-2'>{cartProduct.category}</p>
                    <p className='font-bold pt-2'>$ {cartProduct.price}</p>
                        {/*I have added the four buttons below */}
                    <div className='pt-2'>
                        <button className="add" onClick={handleAddCartItem}>+</button>
                        <span className='ml-4'>{count}</span>
                        <button className="add ml-4" onClick={handleReduceCartItem}>-</button>
                    </div>
                    <button className="add-to-cart bg-yellow-400 shadow-lg shadow-yellow-500/50 p-2 w-48 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white " onClick={()=>handlePrice(cartProduct.price)}>Calculate Price</button>
                    <p>Price : $ <span>{price}</span></p>
                </div>
            </div>
        </div>
    </div> 
    );
};

export default CartProduct;