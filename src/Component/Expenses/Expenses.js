import React, {useState} from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpenseChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
function Expenses(props){
  const[year,setYear]=useState(2019); //Date as a String

  const changeFilterHandler=(selectedYear)=>{
    setYear(selectedYear)
  };

  const filterExpense=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===year;
  });

    //Conditional Approach Three
  

    return(
      <div>   
      <div className="expenses">
      <ExpensesFilter select={year} onFilterChange={changeFilterHandler}/>
      {/* <ExpenseChart expenses={filterExpense}/> */}
      <ExpensesList expenses={filterExpense} />
     

      {/*         "Conditional Approach Two"

      {filterExpense.length===0 && <p style={{color:'white', textAlign:'center', fontWeight:'bold'}}>No Expenses found!</p>}
      {filterExpense.length>0 && (filterExpense.map((expense)=>(
        <ExpenseItem 
        key={expense.id}    //For Uniquely identify each element  
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />
      )))} */}

      {/*           "Conditional Approach one"

       {filterExpense.length===0 ? <p style={{color:'white', textAlign:'center', fontWeight:'bold'}}>No Expenses found!</p> : (filterExpense.map((expense)=>(
        <ExpenseItem 
        key={expense.id}    //For Uniquely identify each element  
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />
      ))) } */}
      
      
      {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}

    </div>
    </div>

    );
    }

export default Expenses;