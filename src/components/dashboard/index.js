import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import PieChart from "../charts/pie"
import VerticalBar from "../charts/verticalBar"
import moment from 'moment'

const DashBoard = (props) => {
    const {auth, histories} = props
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
                    
                    {
                        histories && histories.map((history) => {
                            return (
                                <tr>
                        <td>{history.name}</td>
                        <td>{history.description}</td>
                        <td>{moment((history.createdAt).toDate()).calendar()}</td>
                        </tr>
                            )
                        })
                    }
                    
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
        histories: state.firestore.ordered.history
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([{collection: 'budgets'}, {collection: 'history', orderBy: ['createdAt', 'desc'], limit: 5}])
    )(DashBoard)