import { configureStore } from "@reduxjs/toolkit";
import { ExpenseSlice } from "./slices/Expense";

export const store=configureStore({
    reducer:{
        expense:ExpenseSlice.reducer
    }
})