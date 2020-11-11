import React from 'react'
import { Link } from 'react-router-dom'
const SignedInNavs = ({profile, logout}) => {
    return(
        <React.Fragment>
            <li>
                <Link to='/create' className="btn-floating green darken-2">
                    <i className="material-icons">add</i>
                </Link>
            </li>
            <li>
                <Link to='/budgets' className="btn-floating green"><i className="material-icons">remove_red_eye</i></Link>
            </li>
            <li>
                <Link to='/' onClick={logout} className="btn-floating green darken-3"><i className="material-icons">logout</i></Link>
            </li>
            <li>
                <Link to='/dashboard' className='btn-floating waves-effect'>{profile.initials}</Link>
            </li>
        </React.Fragment>
    )
};


export default SignedInNavs
