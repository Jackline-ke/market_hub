// @flow strict

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <div className='image w-96 h-fit'>
                <img className="w-32 h-48" src={cartProduct.image}
                    alt={cartProduct.name}  /> {/* I have added alt attribute*/}
              </div>
            <div className=''>
                <div className='card-description ml-16'>
                    <div className='flex'>
                        <h4 className='font-bold text-2xl'>{cartProduct.name}</h4>
                        <button className="add-to-cart ml-32 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-20 text-xs rounded-full text-white hover:bg-orange-300 hover:text-white" onClick={()=>handleRemove(cartProduct)}>Remove</button>
                    </div>
                    <p className='pt-2'>{cartProduct.category}</p>
                    <p className='font-bold pt-2'>$ {cartProduct.price}</p>
                        {/*I have added the four buttons below */}
                    <div className='pt-2'>
                        <button className="add" onClick={handleAddCartItem}>+</button>
                        <span className='ml-4'>{count}</span>
                        <button className="add ml-4" onClick={handleReduceCartItem}>-</button>
                        <button className="add-to-cart ml-32 bg-yellow-400 shadow-lg shadow-yellow-500/50 w-40 text-base rounded-full text-white hover:bg-orange-300 hover:text-white " onClick={()=>handlePrice(cartProduct.price)}>Calculate Price</button>
                    </div>
                    <p className='font-bold text-lg'>Price : $ <span>{price}</span></p>
                </div>
            </div>
        </div>
        <Link to="/SignUp">
        <div className='flex justify-center'>
            <button className="ml-4 mt-8 bg-yellow-400 shadow-lg p-2 shadow-yellow-500/50 w-48 text-lg rounded-full text-white hover:bg-orange-300 hover:text-white">Proceed To Payment</button>
        </div>
        </Link>
    </div> 
    );
};

export default CartProduct;