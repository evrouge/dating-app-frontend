import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* cards */}
      <Cards />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
