import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
function StarUi({number}) {
    
const [stars,setstars]=useState(0);


  return (
    <div className='cursor point'>
      {
        [...Array(number)].map((_,index)=>{
          return (
            <FaStar key={index}
            onClick={()=>setstars(index+1)}
            color={index<stars?"yellow":"grey"}
             className='cursor-pointer'

            
            
              
             
            />

          )
        })

        
        
      }
    </div>
  )
}

export default StarUi
