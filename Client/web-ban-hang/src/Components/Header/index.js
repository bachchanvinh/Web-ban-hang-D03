import {NavLink} from 'react-router-dom'



function Header (){
    return (
        <div className="Header">
            <h1>
                Header
            </h1>
            <ul>
                <li><NavLink to ="/home" className="header-link">Home</NavLink></li>
                <li><NavLink to ="/signin" className="header-link">Signin</NavLink></li>
                <li><NavLink to ="/signup" className="header-link">Signup</NavLink></li>
            </ul>
        </div>
    )
}

export default Header