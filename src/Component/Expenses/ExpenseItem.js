import React from 'react';
import Expensedate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
    // const[title,setTitle]=useState(props.title);
    // // const buttonClick = () =>{
    // //     setTitle('Updated!')
    // //     console.log(title)
    // // }
    return(
        <li>
            <div className="expense-item">
                <Expensedate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount} ₹</div>
                </div>
                {/* <button onClick={buttonClick} className="expense-item__button">Click Me</button> */}
            </div>
        </li>
        );

    }
    export default ExpenseItem;