import React, {useState} from 'react'
import './NewExpenseForm.css'
function NewExpenseForm(props){
    const [inputTitle, setInputTitle]=useState('');
    const [inputAmount, setInputAmount]=useState('')
    const [inputDate, setInputDate]=useState('')

    //Using one use state approach
    // const[userInput, setUserInput]=useState({
    //     enterTitle:'',
    //     enterAmount:'',
    //     enterDate:'',
    // })
    const titleChange=(event)=>{
     setInputTitle(event.target.value);
    //    setUserInput({
    //        ...userInput,
    //        enterTitle:event.target.value,
    //    });
    // setUserInput((prevState)=>{
    //     return {...prevState, enterTitle:event.target.value};
    // });
    };
    const amountChange=(event)=>{
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState, enterAmount:event.target.value};
        // });
    };
    const dateChange=(event)=>{
        setInputDate(event.target.value);
        //Approach 1
        // setUserInput({
        //     ...userInput,
        //     enterDate:event.target.value,
        // });
        //Approach2
        // setUserInput((prevState)=>{
        //     return {...prevState, enterDate:event.target.value};
        // });
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveExpenseData(expenseData);
        setInputAmount('');     //Two way binding method
        setInputDate('');
        setInputTitle('');

    };
    const renameName=()=>{
        setInputTitle('')
        setInputAmount('')
        setInputDate('')
    }
    return(
        
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' 
                    value={inputTitle}  //Two way binding method
                    onChange={titleChange}
                    required />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' 
                    value={inputAmount}
                    onChange={amountChange}
                    required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' 
                    min='2019-01-01' 
                    max="2025-01-01" 
                    value={inputDate}
                    onChange={dateChange} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type='button' onClick={renameName}>Reset</button>
                </div>
            </div>
        </form>
        
    );  
}
export default NewExpenseForm;