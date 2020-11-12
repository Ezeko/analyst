import React from 'react'
import { Pie } from '@reactchartjs/react-chart.js'


const PieChart = (props) => {
    const data = {
        labels: ['Savings', 'Education', 'Rent', 'Feeding', 'Entertainment', 'Gifts', 'Miscellaneous', 'Others', 'Transport'],
        datasets: [
          {
            label: 'Amount (₦)',
            data: props.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(87, 0, 78,0.2)',
              'rgba(23,89,199,0.2)',
              'rgba(0,67,88,0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(87, 0, 78,1)',
              'rgba(23,89,199,1)',
              'rgba(0,67,88,1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    return (
        <React.Fragment>
            <div className='header'>
            <h1 className='title'>Budgets</h1>
            <div className='links'>
                
            </div>
            </div>
            <Pie data={data} />
        </React.Fragment>
)}

export default PieChart
