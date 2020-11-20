import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect, Link} from "react-router-dom"
import PieChart from "../charts/pie"
import VerticalBar from "../charts/verticalBar"
import moment from 'moment'
import { getBudgetsDetails, getDashBudgets } from "../../store/actions/budgetActions"
import NavBar from '../nav/Navbar'

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        //console.log(this.props)
        const {getHistories, getBudgets,  auth} = this.props
        getBudgets(auth.uid);
        getHistories(auth.uid);
 
    }

    render(){
        const {auth, histories} = this.props
        const values = []
        let addedValues = 0;
        for (const stuff in this.props.budgets){
            values.push(this.props.budgets[stuff])
            addedValues += this.props.budgets[stuff]
            // console.log(stuff, this.props.budgets[stuff])
        }
        // console.log('values', values)

    if (!auth.uid){
        return <Redirect to='/' />
    }
    return (
        <React.Fragment>
        <NavBar />
        <div className='container section dashboard'>
            <div className='row'>
                <div className='col m6'>
                    {addedValues > 0 ?
                    <PieChart data={values}/>
                    : null
                    }
                </div>

                <div className='col m6'>
                    {addedValues > 0 ?
                    <VerticalBar data={
                    values}/>
                    : null
                    }
                </div>
            </div>
            
            {histories  && histories.length > 0 ?
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
                <Link to='/history' className='right btn'>View More</Link>
                
            </div>
            : <h1>Welcome, You have no transaction yet. Click <Link to='/create'>Here</Link> to Add Budget</h1>
            }
            
        </div>
        </React.Fragment>
    )
    }
}


const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
        histories: state.budget.histories,
        budgets: state.budget.budgets
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getHistories: (userId) => dispatch(getDashBudgets(userId)),
        getBudgets: (userId) => dispatch(getBudgetsDetails(userId))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)