import React from "react";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Featured />
      <Offer />
    </div>
  );
}

export default App;
