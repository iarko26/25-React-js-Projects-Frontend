import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
const [Loading,setLoading]=useState(false);
const [items,setitems]=useState([]);
const [disabled,setdisabled]=useState(false);
const [skip,setskip]=useState(0);


const url=`https://dummyjson.com/products?limit=8&skip=${skip}`;


async function fetchdata(){
  try{
    setLoading(true);
    const res=await fetch(url);
    const data=await res.json();
    if(data.products && data.products.length>0){
      setitems((old)=>[...old,...data.products])
      setskip((old)=>old+8)
      

    }
    else{
      setdisabled(true);

    }
    


  }
  catch(e){
    console.log(e);
  }
  finally{
    setLoading(false);


  }
}
useEffect(()=>{
  fetchdata();
},[])


  return (
    <div>
 
        <div>
          {
            items.map((item)=>{
              return (
                <div key={item.id}>
                <img src={item.thumbnail} width={50} height={50} alt={item.title}/>
                <h3>{item.title}</h3>


                </div>
              )
            })
          }

        </div>
        <div>
          <button onClick={fetchdata} disabled={Loading || disabled}>
            {
              Loading?(<h1>Loading...</h1>):(disabled?(<p>No more data</p>):(
                <p>Load More</p>
              ))
            }
          </button>
        </div>
    </div>
  )
}

export default App
