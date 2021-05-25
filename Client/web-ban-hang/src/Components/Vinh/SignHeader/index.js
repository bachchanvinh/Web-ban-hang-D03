import { NavLink } from 'react-router-dom'
import logo from '../../../Logo/logo-horizontal.png'
import './style.css'


function SignHeader() {
    return (
        <div className="Header-Sign">
            <div className="item-container-header">
                <div className="logo-header">
                <img src={logo} alt="logo" />
                <p>Đăng ký</p>
                </div>
                <a href="#">Cần trợ giúp</a>
            </div>
        </div>
    )
}

export default SignHeader