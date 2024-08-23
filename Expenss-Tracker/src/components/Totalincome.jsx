import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function Totalincome() {
    const expenses=useSelector((state)=>state.expense.expenses);
    const[total,settotal]=useState(0);
    const[savings,setsavings]=useState(0);
    useEffect(()=>{
        const totalexpenseAmount=expenses.reduce((acc,curr)=>acc+curr.amount,0);
        setsavings(total-totalexpenseAmount);
    },[expenses,total])

  return (

    <div>
     <div>
    
        <input
          type='number'
          placeholder='Total Income'
          value={total}
          onChange={(e)=>settotal(e.target.value)}

        />
     </div>
     <h2>Savings: TK {savings}</h2>
      
    </div>
  )
}

export default Totalincome
