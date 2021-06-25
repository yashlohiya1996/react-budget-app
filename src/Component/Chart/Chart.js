// import React from 'react';
// import './chart.css';
// import ChartBar from '../Chart/Chartbar'

// function Chart(props){
//     const dataPointValue= props.dataPoints.map(dataPoint=>dataPoint.value);  //It will return a new array which stores the value of datapony=t object
//     const totalMax=Math.max(...dataPointValue) //spread operator to pull out all the array elemet and add them as a standalone arguments

//     //dataPoint is a object which has value as a property(data.value)
//     return(
//         <div className='chart'>
//             {props.dataPoints.map((dataPoint)=>(
//                 <ChartBar
//                 key={dataPoint.label}
//                 value={dataPoint.value}
//                 maxValue={totalMax}
//                 label={dataPoint.label}
//                 />
//             ))}
//         </div>
//     )
// }
// export default Chart;