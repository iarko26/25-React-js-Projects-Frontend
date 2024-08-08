import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';


function App() {
const url="https://picsum.photos/v2/list";
const [images,setImages]=useState([]);
const [loading,setloading]=useState(false);
const [currentslide,setCurrentSlide]=useState(0);



async function fetchdata(){
try{
  setloading(true);
  const response=await fetch(url);
  const data=await response.json();
  console.log(data);
  setImages(data);


}
catch(error){
  console.error("error");
}
finally{
  setloading(false);
}

}
function handleprev(){
setCurrentSlide(function(prevslide){
  return prevslide>0?prevslide-1:images.length-1;
})

  
}


function handlenext(){
setCurrentSlide(function(prevslide){
  return prevslide<images.length-1?prevslide+1:0;
})
}
useEffect(()=>{
  fetchdata();
},[])





  return (
    <div className='container'>

      <button onClick={handleprev} >Previous</button>

      <button  onClick={handlenext} >Next</button>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) :images.length > 0 && images[currentslide]?.download_url ? (
          <img src={images[currentslide].download_url} alt="slide" width={100} height={100} />
        ) : (
          <p>No images found</p>
        )
        }
      </div>

     
    </div>
  )
}

export default App
