import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import NavBar from '../../nav/Navbar'
const { default: LineChart } = require("../../charts/line")


class BudgetChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            amount: 0,
            history: [],
        }
    }

    componentDidMount() {
        const budgetName = this.props.match.params.budgetName
        
        fetch(`http://budget-analyzer.herokuapp.com/api/budgets/${this.props.userId}/${budgetName}`)
        .then((res) => res.json())
        .then((resp) => {
            // console.log(resp.data[budgetName])
            this.setState({
                amount: resp.data[budgetName],
                history: resp.history
            })
            
        })
        .catch((err) => console.log(err))
    }

    render(){
        // console.log(this.state.amount)
        const labels = [];
        const data = [];
        // console.log('data', data)
        return(
            <React.Fragment>
            <NavBar />
            {
                this.state.amount > 0 ?
                 <div className='container'>
                <div className='row'>
                    <div className='col-9'>
                    {data && labels ?
                    <LineChart title={this.props.match.params.budgetName} data={data} labels={labels}/>
                    : null}
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
                            this.state.history && this.state.history.map((history)=>{
                                labels.push(moment((history.created_at)).format('MMM-D-YY'))
                                data.push(history.amount)
                                //console.log('data',data)
                                return(
                                    <tr key={history.id}>
                                        <td>
                                        {history.username}</td>
                                        <td>{history.description}</td>
                                        <td>{moment((history.created_at)).format('ddd, MMMM Do YYYY, h:mm:ss a')
                                        }</td>
                                    </tr>
                              
                                )
                            })
                                    
                        }
                        
                        </tbody>
                    </table><br />
                    
                </div>
                </div>
                : <div className='alert'> You have not added any <b>{this.props.match.params.budgetName}</b> budget yet</div>}
    
            </React.Fragment>
    
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        userId: state.firebase.auth.uid,
    }
}

export default connect(mapStateToProps) (BudgetChart)