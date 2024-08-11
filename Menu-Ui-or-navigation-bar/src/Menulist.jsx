import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Menulist({menu}) {
    const [expand,setexpand]=useState(false);


  return (
    <div>
     <div onClick={()=>setexpand(!expand)}>
        {menu.label}
        {
            menu.children && menu.children.length?(
                expand?(<FaMinus/>):(<FaPlus/>)
            ):(
                null
            )
        }
     </div>
     <div>
     {
        expand && menu.children && menu.children.length?(
            menu.children.map((child,index)=>{
                return(
                    <Menulist key={index} menu={child}/>
                )
            })
        )   
         

        :(
            null
        )
     }

     </div>

      
    </div>
  )
}

export default Menulist
