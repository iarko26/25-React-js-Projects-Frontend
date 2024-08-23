import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ExpenseBreakdownChart() {
    const expenses = useSelector((state) => state.expense.expenses);

    const expensedata = {
        labels: expenses.map((expense) => expense.date),
        datasets: [{
            label: 'Expense',
            data: expenses.map((expense) => expense.amount),
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
        }]
    };

    return (
        <div>
            <Bar data={expensedata} />
        </div>
    );
}

export default ExpenseBreakdownChart;
