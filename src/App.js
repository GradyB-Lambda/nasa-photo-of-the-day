import React, { useState, useEffect} from "react";
import axios from 'axios';
import Images from './Images'
import "./App.css";

const nasaApi=  "https://api.nasa.gov/planetary/apod?api_key=vlOLRUDS806lmY6WhkoMwdV94fXNc9FgcuBkffoD.nasa.gov/planetary/apod?api_key=6s8lcv8nth7JkF1rcx3Ng8jGwvWcXbFdGb4VNbcy";

function App() {
  const [apod, setApod] =useState([]);

  useEffect(()=>{
    const fetchImage = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=vlOLRUDS806lmY6WhkoMwdV94fXNc9FgcuBkffoD`)
      .then(res => {
        apod(res.data)
      })
      .catch(err => {
        
      })
    }
    fetchImage()
},[])
  return (
    <div className="App">
      <h1>Today's Photo</h1>
     
      <p>
       Our world is bigger than we're used to. There is endless space. Explore!  <span role="img" aria-label='go!'>🚀</span>!</p>
      
        <img id="mainPic" src = {apod.url}></img>
        
     <p class="mainText"> 
        <h3>About</h3>
        <p>{apod.title}</p> 
        <p>{apod.date}</p>
        <p>{apod.explanation}</p>
        <h6>copyright @ {apod.copyright}</h6>
      </p>
    

    </div>
  );
}
//just need a pull request

export default App;