import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const url='https://dummyjson.com/products';
  const[data,setdata]=useState([]);
  const [loading,setloading]=useState(false);
  const [scroll,setscroll]=useState(0);

  async function fetchdata(){
   try{
    setloading(true);
    const res=await fetch(url);
    const data=await res.json();
    if(data && data.products && data.products.length>0){
      setdata(data.products);

    }
   }
   catch(e){
      console.log(e)
   }
   finally{
    setloading(false);
   }

  }

  useEffect(()=>{
    fetchdata();
  },[])


   useEffect(()=>{
    const handlescroll=()=>{
      const scrollTop=document.documentElement.scrollTop;
      const scrollHeight=document.documentElement.scrollHeight;
      const clientHeight=document.documentElement.clientHeight;
      const scrollpercentage=(scrollTop/(scrollHeight-clientHeight))*100;
      setscroll(scrollpercentage);
    }
    window.addEventListener("scroll",handlescroll);
    return(()=>{
      window.removeEventListener("scroll",handlescroll);
    })
   },[])


  return (
    <div >
    <div className='top-container'>
    <h1>Scroll Indicator</h1>
      <div className='scroll-indicator'>
        <div className='current-scroll' style={{ width: `${scroll}%` }}>

        </div>
      </div>

    </div>
    

      <div className='container'>
      {
        loading?
        (<h1>Loading...</h1>):
        (
         data && data.length?(
          data.map((item,index)=>{
            return(
              <div key={index}>
                 <p>{item.title}</p>

              </div>
            )
          })
         ):(null)
        )

      }

      </div>

      
    </div>
  )
}

export default App
