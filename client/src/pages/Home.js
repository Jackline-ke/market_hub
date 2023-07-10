// @flow strict

import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Banner from "../components/Banner"
import Featured from '../components/Featured';
import Offer from "../components/Offer"
import Footer from "../components/Footer"
import Phone from '../components/Phone';
import Groceries from '../components/Groceries';
import Women from '../components/Women';
import Men from '../components/Men';

/*I have added productsToDisplay as a prop and imported useState to track state of search term */

function Home({products, handleClick}) {
   /*Search term is used in searchbar*/
  const [searchTerm, setSearchTerm] = useState('')
 
  const onSearchChange=(event)=> {
    setSearchTerm(event.target.value)
  }

  /*I have replaced productItems(above) with productItemsToDisplay*/
    
      const filteredProducts = products.filter((product) => {
        console.log('search', { products });
        if (searchTerm) {
          return product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
        }
        return true;
      });

      const productItemsToDisplay = filteredProducts.map(product => {
        return (
            <>
        <ProductList key={product.id} product={product} handleClick={handleClick} isInCart={false} />
            </>
        )})
      /* I have rendered SearchBar here and changed productItems to productItemsToDisplay*/
    return (
     <div className='home'>
      <div className='homepage'>
          <div className='flex justify-center'>
            <SearchBar onSearchChange={onSearchChange} productItemsToDisplay={productItemsToDisplay}/>
          </div>
          <Banner />
          <Featured />
          <Offer />
          
      </div>
      
        <div>
         {productItemsToDisplay}
        </div>
        <Phone handleClick={handleClick} isInCart={false}  />
        <Groceries />
        <Women />
        <Men />
        <Footer />
     </div>  
    );
};

export default Home;