 // Chart.jsx

 import React from 'react';
 import { Line } from 'react-chartjs-2';
 import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
 } from 'chart.js';

 ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
 );

 const Chart = ({ title, data }) => {
   const chartData = {
     labels: data.labels,
     datasets: [
       {
         label: title,
         data: data.values,
         fill: false,
         backgroundColor: 'rgb(75, 192, 192)',
         borderColor: 'rgba(75, 192, 192, 0.2)',
       },
     ],
   };

   const options = {
     responsive: true,
     plugins: {
       legend: {
         position: 'top',
       },
       title: {
         display: true,
         text: title,
       },
     },
   };

   return (
     <div className='p-4 border rounded shadow-lg m-2'>
       <Line data={chartData} options={options} />
     </div>
   );
 };

 export default Chart;
