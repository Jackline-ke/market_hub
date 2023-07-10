// @flow strict
import React from 'react';
import "./ProductList.css";
function ProductList({product, handleClick, isInCart}) {
    /*const {id, image, name, category, price} = product;  Declared in */

    return (
        <div className='product-list border border-gray-100 rounded-lg shadow-lg shadow-yellow-500/50 h-fit w-60' key={product.id}>
            <img src={product.image} alt={product.name} className="h-80 w-60 rounded-t-lg"/>
            <div className='description pt-4 mb-4'>
                <h4 className='font-bold'>{product.name}</h4>
                <p className="pt-2 text-sm text-gray-500">{product.category}</p>
                <p className='font-bold mb-2'>$ {product.price}</p>
                <button className='add-to-cart bg-yellow-400 shadow-lg shadow-yellow-500/50 w-32 font-semibold rounded-full text-white hover:bg-orange-300 hover:text-white' onClick={() => handleClick(product, isInCart)}>Add To Cart</button>
            </div>
        </div>
      
    );
};

export default ProductList;