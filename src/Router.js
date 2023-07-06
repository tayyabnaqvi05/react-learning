import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from './home';
import About from './About';
import Contact from './Contact';
import App from './App';

const AppRouter = () => {
  return (
  
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
    </Routes>
  
  );
};

export default AppRouter;
