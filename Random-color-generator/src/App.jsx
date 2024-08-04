import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const[typeofcolor,settypeofcolor]=useState('rgb');
  const[color,setcolor]=useState('red')

  function utility(length){
return Math.floor(Math.random()*length)
  }
  function Selecthexcolor(){
    const h = '0123456789ABCDEF';
    let hexcolor='#'
    for(let i=0;i<6;i++){
      hexcolor+=h[utility(h.length)]
    }
    setcolor(hexcolor)
  }
  function Selectrgbcolor(){
    let r=utility(256);
    let g=utility(256);
    let b=utility(256);
setcolor(`rgb(${r},${g},${b})`)

  }
 
  function handlebutton(){
    typeofcolor==='rgb'?Selectrgbcolor():Selecthexcolor()
  }


  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100">
        <div className="mb-8 space-x-4">
              <button onClick={()=>{settypeofcolor('rgb')}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Select Rgb</button>
                  <button onClick={()=>{settypeofcolor('hex')}}  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">Select Hex</button>
                    <button onClick={handlebutton} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300">Random</button>
                    <div className="w-64 h-64 flex justify-center items-center border-4 border-gray-300 rounded-lg shadow-lg" style={{backgroundColor:color}}>
                    <h1 className="text-xl font-bold text-white shadow-text">{color}</h1>
                  

              </div>
        </div>
     

      </div>
   
  )
}

export default App
