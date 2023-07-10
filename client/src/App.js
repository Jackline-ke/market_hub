import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Phone from './components/Phone';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  
  // fetch data
  useEffect(() => {
    fetch('/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);

  const handleClick = (product, isInCart) => {
    if (cart.includes(product) && isInCart === true) {
      setCart(cart.filter(({id}) => id !== product.id))
    } else if (cart.includes(product) === false) {
      setCart(cart => [...cart, product])
    }
  }

  return (
    <div className="App">
        {/* use Router to aid in navigation inside the application */}
        <Router>
        {/* call Navbar */}
        <Navbar /> 
          <Routes>
          <Route path='/' element={< Home products={products} handleClick={handleClick}/> } />
            <Route path='/Cart' element={< Cart setCart={setCart} cart={cart} handleClick={handleClick} />}/>
            <Route path='/SignUp' element={<SignUp />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Phone' element={<Phone />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
