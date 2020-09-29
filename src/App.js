import React from 'react';
import classes from './App.module.css';
import Navbar from './Components/Header/NavBar/NavBar';
import Controls from './Components/Sections/Controls';
// import Muzic from './media/Savage.mp3';

function App() {
  // <div>
  // <<audio src={Muzic} loop autoPlay controls="" preload="auto"></audio>
  // </div>
  return (
    <div className={classes.App}>

      <Navbar/>
      <Controls/>
    </div>
  );
}

export default App;
