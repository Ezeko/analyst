import React from 'react'
import { Link } from 'react-router-dom'
const SignedInNavs = ({...props}) => {
    return(
        <React.Fragment>
            <li>
                <Link to='/create'>Create New Budget Plan</Link>
            </li>
            <li>
                <Link to='/budgets'>View Budgets</Link>
            </li>
            <li>
                <Link to='/logout'>Logout</Link>
            </li>
            <li>
                <Link to='/dashboard' className='btn-floating waves-effect'>UL</Link>
            </li>
        </React.Fragment>
    )
};


export default SignedInNavs
