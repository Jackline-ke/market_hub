import React from "react";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Featured />
    </div>
  );
}

export default App;
