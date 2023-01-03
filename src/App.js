import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  // let [people, setPeople] = useState([])

  //   const getPeople = () => {
  //       axios
  //           .get('http://localhost:8000/api/dating')
  //           .then((response) => setPeople(response.data), 
  //           (err) => console.log(err))
  //   }
    
  //   useEffect (() => {
  //       getPeople();
  //   },[])

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
