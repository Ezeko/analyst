import SignedOutNavs from "./signedOutNavs"
import SignedInNavs from './signedInNavs'

const NavBar = () => {
    return(
        <nav className='nav black'>
            <ul>
                <li className='center'><a href='/dashboard'>Dashboard</a></li>
                <ul className='right'>
                    <SignedOutNavs />
                    <SignedInNavs />
                </ul>

            </ul>
        </nav>
    )
}

export default NavBar