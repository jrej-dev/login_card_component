import React from 'react';
import './scss/App.scss';

import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <Navbar />
        <Card className="card-component" />
        <p className="quote">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Odit nihil dolor magnam dolorum? Optio voluptas explicabo
          nam! Aliquid, beatae! Minima accusantium, vel hic
          numquam eveniet fugiat mollitia recusandae dolores
          deleniti?
        </p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
