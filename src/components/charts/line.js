import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'



const LineChart = (props) => {
    const data = {
        labels: props.labels,
        datasets: [
          {
            label: 'Amount (₦)',
            data: props.data,
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
            <h1 className='title'>{props.title}</h1>
            </div>
            <Line data={data} options={options} />
        </React.Fragment>
    )
}

export default LineChart
