const { Link } = require("react-router-dom")

const NavBar = () => {
    return(
        <nav className='nav black'>
            <ul>
                <li className='center'><a href='/dashboard'>Dashboard</a></li>
                <ul className='right'>
                    <li>
                        <Link to='/'>SIGN IN</Link>
                    </li>
                    <li>
                        <Link to='/register'>SIGN UP</Link>
                    </li>
                    <li><Link to='/dashboard' className='btn-floating waves-effect'>UL</Link></li>
                    <li><Link to='/create'>Create New Budget Plan</Link></li>
                    <li><Link to='/budgets'>View Budgets</Link></li>
                </ul>

            </ul>
        </nav>
    )
}

export default NavBar