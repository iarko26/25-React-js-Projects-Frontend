import React, { useState } from 'react'

import Menulist from './Menulist';
function Menu({menus}) {


  return (
    <div>
    <h1>Menu</h1>
    {
      menus && menus.length?(
        menus.map((menu,index)=>{
          return(
            <Menulist key={index} menu={menu}/>
          )
        })

      ):(null)
    }
  
    </div>
  )
}

export default Menu
