import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBudgetsDetails } from '../../../store/actions/budgetActions';

class Budgets extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        const {getBudgets, auth } = this.props;

        getBudgets(auth.uid)
    }
    render(){
        return(
            <React.Fragment>
                <div className='container center'>
                    <ul className=''>
                    {this.props.budgets && this.props.budgets !== undefined && Object.entries(this.props.budgets).map(data => {
                        return(
                            <li className='collection' key={data[0]}>
                            <a  href={`/budgets/${data[0]}`} className='  collection-item'> 
                            <span className='badge' >₦{data[1]}</span>{data[0]}</a>
                    </li>
                        )
                    })}
                    
                    </ul>
                </div>
            
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
        budgets: state.budget.budgets
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        getBudgets: (userId) => dispatch(getBudgetsDetails(userId))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Budgets)