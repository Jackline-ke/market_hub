
import React from "react";
import './App.css';
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
     <Featured />
     <Offer />
      <Footer />
    </div>
  );
}

export default App;
