import SignedOutNavs from "./signedOutNavs"
import SignedInNavs from './signedInNavs'
import { connect } from "react-redux"
import { logout } from "../../store/actions/authActions"
import { Link } from "react-router-dom"

const NavBar = (props) => {
    //console.log(props)
    const {auth, profile, logout} = props
    //console.log('profile', profile)
    return(
        <nav className='nav black'>
            <ul>
                {auth.uid ?                 <li className='center'><Link to='/dashboard'>Dashboard</Link></li> :
                <li className='center'><Link to='/'>Home</Link></li>
                }

                <ul className='right'>
                {
                    auth.uid ? <SignedInNavs profile={profile} logout={logout} /> : <SignedOutNavs />
                }
                    
                    
                </ul>

            </ul>
        </nav>
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