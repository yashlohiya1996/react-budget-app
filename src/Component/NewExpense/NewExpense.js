import React, {useState} from 'react'
import Expensedate from '../Expenses/ExpenseDate';
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'
function NewExpense(props){

    const [editing,setEditing]=useState(false)

    const expenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false)
    };

    const startEdit=()=>{
        setEditing(true)
    };
    const stopEdit=()=>{
        setEditing(false)
    }

    return(
        <div className="new-expense">
        {!editing && <button onClick={startEdit}>Add New Expense</button>}
        {editing && <NewExpenseForm 
        onSaveExpenseData={expenseDataHandler} 
        onCancel={stopEdit}/>}
        </div>
    )
}
export default NewExpense;