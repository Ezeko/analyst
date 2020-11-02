import React from 'react'
import { Link } from 'react-router-dom'
const SignedInNavs = ({profile, logout}) => {
    return(
        <React.Fragment>
            <li>
                <Link to='/create'>Create Budget</Link>
            </li>
            <li>
                <Link to='/budgets'>View Budgets</Link>
            </li>
            <li>
                <Link to='/' onClick={logout}>Logout</Link>
            </li>
            <li>
                <Link to='/dashboard' className='btn-floating waves-effect'>{profile.initials}</Link>
            </li>
        </React.Fragment>
    )
};


export default SignedInNavs
