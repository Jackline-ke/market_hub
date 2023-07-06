
import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
