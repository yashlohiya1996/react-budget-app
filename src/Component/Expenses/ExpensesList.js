import React from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props){
        // let content= <p style={{color:'white', textAlign:'center', fontWeight:'bold'}}>No Expenses found!</p>    //We can store JSX content into a variable
        if(props.expenses.length===0){
            return <h2 className="expenses-list__fallback">Found no Expenses!</h2>;
        }

    return <ul className="expenses-list">
        {props.expenses.map((expense)=>(
                <ExpenseItem 
                key={expense.id}    //For Uniquely identify each element  
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />
            ))}
    </ul>
};
export default ExpensesList;