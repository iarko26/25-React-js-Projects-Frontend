import { createSlice } from "@reduxjs/toolkit";

const initialState={
    expenses:[]

}
export const ExpenseSlice=createSlice({
    name:'expense',
    initialState,
    reducers:{
        addExpense:(state,action)=>{
            state.expenses.push(action.payload)
        },
        deleteExpense:(state,action)=>{
            state.expenses=state.expenses.filter((expense)=>expense.id!==action.payload)
        },


    }

})
export const{addExpense,deleteExpense}=ExpenseSlice.actions
export default ExpenseSlice.reducer