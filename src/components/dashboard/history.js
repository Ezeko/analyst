import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getBudget } from '../../store/actions/budgetActions'
import moment from 'moment'

class History extends Component{
    constructor(props){
        super(props)
        this.state = {}

    }

    componentDidMount (){
        const {history, auth } = this.props;
        history(auth.uid)
    }


    render(){
        const {histories } = this.props
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
                <tr key={history.id}>
                <td>{history.username}</td>
                <td>{history.description}</td>
                <td>{moment((history.created_at)).format('ddd, MMMM Do YYYY, h:mm:ss a')}</td>
            </tr>
            ))}
            
            
            </tbody>
        </table>
            </React.Fragment>
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
        history: (userId) => dispatch( getBudget(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (History)