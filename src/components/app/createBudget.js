import React, {useState} from 'react'


const CreateBudget = ({history}) => {

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
        console.log(state);
        history.replace('/dashboard')
        
    };

    return(
        <React.Fragment>
            <form className='container' onSubmit={handleSubmit}>
                <div className='input-field'>
                    <label htmlFor='title'>Budget Title</label>
                    <input type='text' id='title' placeholder='e.g Education' onChange={handleChange} required />
                </div>

                <div className='input-field'>
                    <label htmlFor='amount'>Budget Amount</label>
                    <input type='number' id='amount' onChange={handleChange} required />
                </div>
                <input type='submit' className='btn right' value='create budget plan' />

            </form>
        </React.Fragment>
    )
}

export default CreateBudget