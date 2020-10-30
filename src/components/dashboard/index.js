import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import PieChart from "../charts/pie"
import VerticalBar from "../charts/verticalBar"

const DashBoard = (props) => {
    const {auth} = props
    //console.log(props)
    if (!auth.uid){
        return <Redirect to='/' />
    }
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
                </table><br />
                <a href='/history' className='right btn'>View More</a>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([{collection: 'budgets'},])
    )(DashBoard)