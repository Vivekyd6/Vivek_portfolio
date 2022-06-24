import React from "react";
import { Navbar } from "./components";
import { Header, About, Skills, Work, Footer } from "./containers";
import "./App.scss";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
