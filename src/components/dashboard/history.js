import React from 'react'

const History = () => {
    return (
        <React.Fragment>
            <table className='striped responsive-table container'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Time</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td>Alvin</td>
            <td>Added ₦50,000 to savings</td>
            <td>Today, 4:50pm</td>
        </tr>
        <tr>
            <td>Alan</td>
            <td>Created A new budget</td>
            <td>Today, 5:00pm</td>
        </tr>
        <tr>
            <td>Jonathan</td>
            <td>Added Education to budget</td>
            <td>Yesterday, 6:00pm</td>
        </tr>
        </tbody>
    </table>
        </React.Fragment>
    )
}


export default History