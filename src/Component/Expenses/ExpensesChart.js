// import react from 'react';
// import Chart from '../Chart/Chart';
// export default function ExpenseChart(props){
//     const chartDataPoints = [
//         {label: 'Jan', value: 0},
//         {label: 'Feb', value: 0},
//         {label: 'Mar', value: 0},
//         {label: 'Apr', value: 0},
//         {label: 'May', value: 0},
//         {label: 'Jun', value: 0},
//         {label: 'jul', value: 0},
//         {label: 'Aug', value: 0},
//         {label: 'Sep', value: 0},
//         {label: 'Oct', value: 0},
//         {label: 'Nov', value: 0},
//         {label: 'DEC', value: 0},
//     ];
//     for( const expense of props.expenses){
//         const expenseMonth = expense.date.getMonth();   //starting at  0 =>Jan is 0
//         chartDataPoints[expenseMonth].value += expense.amount; 
//     }
//     return <Chart dataPoints={chartDataPoints}/>
// }