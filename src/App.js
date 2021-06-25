import React, {useState} from 'react';
import Expenses from './Component/Expenses/Expenses';
import NewExpense from './Component/NewExpense/NewExpense'

const DummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),  //Date as a object
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
const[expenses,setExpenses]=useState(DummyExpense);
const addExpenseHandler=(expense)=>{
  console.log(expense)
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses]
  })
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      
    </div>
  );
}

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Hello!"),
//   React.createElement(Expenses, {expenses: expenses})
// )
// }
export default App;
