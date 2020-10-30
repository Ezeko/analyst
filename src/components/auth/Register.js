import React, {useState} from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../store/actions/authActions'

const SignUP = (props) =>{
    //console.log(props)
    const [state, setState] = useState({})
    const {register} = props
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        register({...state})
        props.history.replace('/dashboard')

    }
    return (
        <div className='app' >
        <form className='container' onSubmit={handleSubmit}>
            <div className='input-field'>
                <label htmlFor='firstName'> First Name</label>
                <input type='text' id='firstName' onChange={handleChange} required />
            </div>

            <div className='input-field'>
                <label htmlFor='lastName'> Last Name</label>
                <input type='text' id='lastName' onChange={handleChange} required />
            </div>

            <div className='input-field'>
                <label htmlFor='email'> Email</label>
                <input type='email' id='email' onChange={handleChange} required />
            </div>

            <div className='input-field'>
                <label htmlFor='password'> Password</label>
                <input type='password' id='password'  onChange={handleChange} required/>
            </div>
            <input type='submit' className='btn pulse right' value='Sign UP' />
        </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => {
            dispatch(registerUser(user))
        }
    }
}
export default connect(null, mapDispatchToProps)(SignUP) 