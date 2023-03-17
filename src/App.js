import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SingleCocktail from './components/SingleCocktail/SingleCocktail';
// import components
import Navbar from './components/Navbar/Navbar.jsx';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;