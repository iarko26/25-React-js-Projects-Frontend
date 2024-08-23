import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../redux/slices/Expense';
import { toast } from 'react-toastify';
function ExpenseForm() {
    const dispatch=useDispatch();
    const [name,setname]=useState('');
    const[amount,setamount]=useState('');
    const[category,setcategory]=useState('Housing');
    const[date,setdate]=useState('');

   

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(!name || !amount || !category || !date ){
            toast.error('Please fill all the fields');
            return;
            

        }
        const newexpense={
            id:Date.now(),
            name,
            amount:parseFloat(amount),
            category,
            date
        }
      

        dispatch(addExpense(newexpense))
        toast.success('Expense added successfully')
        
        setname('');
        setamount('');
        setcategory('Housing');
        setdate('');

    }



  return (
    <form onSubmit={handlesubmit}>

      <input 
      type='text'
      placeholder='Expense Name'
      value={name}
      onChange={(e)=>setname(e.target.value)}


      
       />
       <input
       type='number'
       placeholder='Amount'
       value={amount}
       onChange={(e)=>setamount(e.target.value)}

       
        />

        <select
        value={category}
        onChange={(e)=>setcategory(e.target.value)}

        
        >
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
        </select>
        <input 
        type='date'
        value={date}
        onChange={(e)=>setdate(e.target.value)}
         />
         <button type='submit'>
            Add Expense
         </button>
    </form>
  )
}

export default ExpenseForm
