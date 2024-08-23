import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaTrash } from "react-icons/fa";
import { deleteExpense } from '../redux/slices/Expense';
import { toast } from 'react-toastify';
function ExpenseList() {
    const expenses=useSelector((state)=>state.expense.expenses);
    const dispatch=useDispatch();
  

  return (
    <div>
    {
        expenses.map((expense)=>{
          return(
            <div key={expense.id}>
             <p>{expense.name}</p>
             <p>BDT{expense.amount}</p>
             <p>{expense.category}</p>
            <p>{expense.date}</p>
            <button onClick={()=>dispatch(deleteExpense(expense.id))}>
                <FaTrash/>
                
            </button>

            

            </div>
          )
        })
    }
      
    </div>
  )
}

export default ExpenseList
