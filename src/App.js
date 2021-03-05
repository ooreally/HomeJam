import React from 'react';
// import logo from './assets/images/logo.png';
// import basket from './assets/images/basket.svg';
// import hamburger from './assets/images/Hamburger.svg';
// import search from './assets/images/search.png';
// import star from './assets/images/star.png';
import Upcoming from './components/Upcoming/Upcoming';
import Reviews from './components/Reviews/Reviews';
import Navbar from './components/Navbar/Navbar';
import Ratings from './components/Ratings/Ratings';
// import ratings from './ratingsData.js';
// import showsData from './showsData';
// import reviewsData from './reviewsData';
//import navbar from './components/navbar/navbar';
import './App.css';


function App() {
  return (
    <div className="App">   
    <div className="bg">
      <Navbar/>
        <div className="title-text" >
        Cari Cari
        </div>
        <div className="inner-text">
         <p> Live from their sofa to yours. Get closer to your favourite</p>
          <p>artists, and never miss out.</p>
        </div>
      <Ratings/>    
      <Upcoming/>
      <Reviews/>
  </div>
   
</div>
  );
}

export default App;
