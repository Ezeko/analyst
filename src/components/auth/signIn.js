import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { SignInUser } from '../../store/actions/authActions'



const SignIn = (props) =>{
    const {login, auth} = props
    const [state, setState] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default form action
        login({...state}); //login through firebase

    }

    if (auth.uid) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className='app' >
        <form className='container' onSubmit={handleSubmit}>

            <div className='input-field'>
                <label htmlFor='email'> Email</label>
                <input type='email' id='email' onChange={handleChange} required />
            </div>

            <div className='input-field'>
                <label htmlFor='password'> Password</label>
                <input type='password' id='password' onChange={handleChange} />
            </div>
            <input type='submit' className='btn right' value='Sign IN' />
        </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) =>dispatch(SignInUser(user))
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn)