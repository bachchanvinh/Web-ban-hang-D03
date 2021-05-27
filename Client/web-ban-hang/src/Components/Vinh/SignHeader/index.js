import { useLocation } from 'react-router-dom'
import logo from '../../../Img/Sign/logo-horizontal.png'
import './style.css'


function SignHeader() {
    let path=useLocation().pathname
    return (
        <div className="Header-Sign flex-row">
            <div className="item-container-header flex-row">
                <div className="logo-header flex-row">
                    <img src={logo} alt="logo" />
                    {path==="/signin/signup"?<p>Đăng ký</p>:<p>Đăng nhập</p>}
                </div>
                <a href="#" className="help-link">Cần trợ giúp?</a>
            </div>
        </div>
    )
}

export default SignHeader