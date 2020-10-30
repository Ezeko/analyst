import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'



const VerticalBar = (props) => {
    const data = {
        labels: ['Savings', 'Education', 'Rent', 'Feeding', 'Entertainment', 'Feeding'],
        datasets: [
          {
            label: 'Amount (₦)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ]
        },
      }
    return (
  <React.Fragment>
    <div className='header'>
      <h1 className='title'></h1>
    </div>
    <Bar data={data} options={options} />
  </React.Fragment>
)}

export default VerticalBar

