import React, {useState} from 'react'

const SignUP = () =>{
    const [state, setState] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div className='app' >
        <form className='container offset-mt3'>
            <div className='input-field'>
                <label htmlFor='firstname'> First Name</label>
                <input type='text' id='firstname' onChange={handleChange} required />
            </div>

            <div className='input-field'>
                <label htmlFor='lastname'> Last Name</label>
                <input type='text' id='lastname' onChange={handleChange} required />
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

export default SignUP