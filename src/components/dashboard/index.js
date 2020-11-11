import { connect } from "react-redux"
import { Redirect, Link} from "react-router-dom"
import PieChart from "../charts/pie"
import VerticalBar from "../charts/verticalBar"
import moment from 'moment'
import { getDashBudgets } from "../../store/actions/budgetActions"
import { Component } from "react"

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //console.log(this.props)
        const {getHistories, auth} = this.props
        
        getHistories(auth.uid);
    }

    render(){
        const {auth, histories} = this.props
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
                                <tr key={history.id}>
                        <td>{history.username}</td>
                        <td>{history.description}</td>
                        <td>{moment((history.created_at)).format('ddd, MMMM Do YYYY, h:mm:ss a')}</td>
                        </tr>
                            )
                        })
                    }
                    
                    </tbody>
                </table><br />
                {histories ? <Link to='/history' className='right btn'>View More</Link> : ''}
                
            </div>
            
        </div>
    )
    }
}


const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
        histories: state.budget.histories
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getHistories: (userId) => dispatch(getDashBudgets(userId))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)