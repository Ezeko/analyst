import SignedOutNavs from "./signedOutNavs"
import React from 'react'
import SignedInNavs from './signedInNavs'
import { connect } from "react-redux"
import { logout } from "../../store/actions/authActions"
// import { Link } from "react-router-dom"

const NavBar = (props) => {
    //console.log(props)
    const {auth, profile, logout} = props
    //console.log('profile', profile)
    return(
        <React.Fragment>
        <nav className='black'>
            <div className='nav-wrapper'>
            <ul >
                
                {
                    auth.uid ? <SignedInNavs profile={profile} logout={logout} /> : <SignedOutNavs />
                }
                    
                    

            </ul>
            </div>
            
        </nav>
        <ul className="sidenav" id="mobile-demo">
            {
                auth.uid ? <SignedInNavs profile={profile} logout={logout} /> : <SignedOutNavs />
            }
        </ul>
        </React.Fragment>

    )
}

const mapStateToProps = (state) => {
    //console.log(state.firebase.auth)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (NavBar)