import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getBudget } from '../../store/actions/budgetActions'
import moment from 'moment'

class Comp extends Component{
    constructor(){

    }
}

const History = (props) => {
    const { history, auth, histories } = props
    //const histories = []
    //history(auth.uid)

    console.log(props)


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
        {histories && histories.map(history => (
            <tr>
            <td>{history.username}</td>
            <td>{history.description}</td>
            <td>{moment((history.created_at)).format('MMMM Do YYYY, h:mm:ss a')}</td>
            {console.log(history.created_at)}
        </tr>
        ))}
        
        
        </tbody>
    </table>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        histories: state.budget.histories
    
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        history: (userId) => dispatch( getBudget(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (History)