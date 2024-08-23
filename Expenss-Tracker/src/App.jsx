
import {ExpenseBreakdownChart,ExpenseForm,ExpenseList,TotalExpenses,Totalincome} from "./components/Index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {


  return (
   
   
   <div className="container">
   <h1 className="heading">Expense Tracker</h1>
   <div className="firstcontainer">
   <div className="section">
   <Totalincome />
   </div>
          <div className="section">
          <TotalExpenses />
          </div>
          <div className="chart">
          <ExpenseBreakdownChart />
          </div>
   </div>
  
        
   <div className="secondcontainer">
            
   <div className="section expense-formm">
        <ExpenseForm/>
        </div>
         <div className="section expense-list">
         <ExpenseList />
         </div>
   </div>


          
        
        <ToastContainer />
      </div>
      
  
  )
}

export default App
