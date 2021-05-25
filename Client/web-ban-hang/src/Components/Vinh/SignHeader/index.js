import { NavLink } from 'react-router-dom'
import logo from '../../../Img/Signin img/logo-horizontal.png'
import './style.css'


function SignHeader() {
    return (
        <div className="Header-Sign flew-row">
            <div className="item-container-header flew-row">
                <div className="logo-header flew-row">
                <img src={logo} alt="logo" />
                <p>Đăng nhập</p>
                </div>
                <a href="#" className="help-link">Cần trợ giúp?</a>
            </div>
        </div>
    )
}

export default SignHeader