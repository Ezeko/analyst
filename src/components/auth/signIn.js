import React, {useState} from 'react'



const SignIn = () =>{
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

export default SignIn