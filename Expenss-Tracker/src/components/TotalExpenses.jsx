import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'

function TotalExpenses() {
  const expenses=useSelector((state)=>state.expense.expenses);
  const [totalexpense,settotalexpense]=useState(0);
  



  useEffect(()=>{
    settotalexpense(expenses.reduce((acc,curr)=>acc+curr.amount,0))

  },[expenses])
  return (
    <div>
    <h2 className='Total-title'>Total Expense: TK {totalexpense}</h2>
    
      
    </div>
  )
}

export default TotalExpenses
