import React from 'react'
import { Link } from 'react-router-dom'


const SignedOutNavs = ({...props}) => {

    return(
        <React.Fragment>
            <li>
                <Link to='/'>SIGN IN</Link>
            </li>
            <li>
                <Link to='/register'>SIGN UP</Link>
            </li>
        </React.Fragment>
    )
}

export default SignedOutNavs