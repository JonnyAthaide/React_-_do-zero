import React from 'react';
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
// import Site from './Site';
import Footer from './components/Footer';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Map from './components/map';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className='main'>
          <Banner />
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="/Map" element={<Map />} /> */}
            {/* <Route path="/Site" element={<Site />} /> */}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
