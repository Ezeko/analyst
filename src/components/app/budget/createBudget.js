import React, {useState} from 'react'
import { connect } from 'react-redux';
import { createBudget } from '../../../store/actions/budgetActions';


const CreateBudget = (props) => {

    const {history, create, userId, profile} = props

    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.target.reset();
        e.preventDefault();
        //console.log(create);
        create({
            ...state,
            userId,
            authorName: profile.firstName + ' ' + (profile.lastName).toUpperCase()
        })
        history.replace('/dashboard')
        
    };

    return(
        <React.Fragment>
        {
            //console.log(props)
        }
            <form className='container' onSubmit={handleSubmit}>

                <div className='input-field col s12'>
                    <select id='title' className='browser-default' onChange={handleChange} required>
                        <option value="" defaultValue="">Choose Budget Title</option>
                        <option value="education">Education</option>
                        <option value="savings">Savings</option>
                        <option value="transport">Transport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="rent">Rent</option>
                        <option value="feeding">Feeding</option>
                        <option value="gifts">Gifts</option>
                        <option value="miscellaneous">Miscellaneous</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className='input-field'>
                    <label htmlFor='amount'>Budget Amount</label>
                    <input type='number' id='amount' onChange={handleChange} required />
                </div>
                <div className='input-field col s12'>
                    <label htmlFor='priority'></label>
                    <select id='priority' className='browser-default' onChange={handleChange} required>
                        <option value="" defaultValue="">Choose Budget Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <input type='submit' className='btn right' value='create budget plan' />

            </form>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (budget) => dispatch(createBudget(budget))
    }
};

const mapStateToProps = (state) => {
    return{
        userId: state.firebase.auth.uid,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateBudget)