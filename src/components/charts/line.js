import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'



const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Amount (₦)',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
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
          ],
        },
      }
    return(
        <React.Fragment>
            <div className='header'>
            <h1 className='title'>Savings</h1>
            </div>
            <Line data={data} options={options} />
        </React.Fragment>
    )
}

export default LineChart
