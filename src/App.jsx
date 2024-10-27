// App.jsx
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallary from './components/Gallary/Gallary';
import Contact from './components/Contact/Contact';
import Rooms from './components/Rooms';

function App() {
  return (
    <div>
      {/* Header remains fixed at the top */}
      <Header />

      {/* Each section has an id for smooth scrolling */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="rooms">
        <Rooms />
      </div>
      <div id="gallery">
        <Gallary />
      </div>
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
