import PieChart from "../charts/pie"
import VerticalBar from "../charts/verticalBar"

const DashBoard = () => {
    return (
        <div className='container section dashboard'>
            <div className='row'>
                <div className='col m6'>
                    <PieChart />
                </div>

                <div className='col m6'>
                    <VerticalBar />
                </div>
            </div>
            

            <div>
                <table className='striped responsive-table'>
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
                <a href='/history' className='right btn'>View More</a>
            </div>
            
        </div>
    )
}


export default DashBoard