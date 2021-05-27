import { Link } from 'react-router-dom'
import { useState } from 'react'
import Eyeclose from '../Eyeclose'
import Eyeopen from '../Eyeopen'
import './style.css'


function SignupComponent() {
    const [isEyeclose, setHidePass] = useState(true)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [userNoti, setUserNoti] = useState(false)
    const [passNoti, setPassNoti] = useState(false)

    function handleUserNameChange(e) {

        setUserName(e.target.value)
        if (e.target.value === "") return setUserNoti(true)
        setUserNoti(false)
    }
    function handlePassChange(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
        if (e.target.value === "") return setPassNoti(true)
        setPassNoti(false)
    }
    return (
        <form className="Sign-in-form flex-coulumn">
            <h3>Đăng ký</h3>
            <div className="noti-fail flex-row">
                <svg viewBox="0 0 16 16" className="stardust-icon"><path fill="none" stroke="#FF424F" d="M8 15A7 7 0 108 1a7 7 0 000 14z" clipRule="evenodd"></path><rect stroke="none" width="7" height="1.5" x="6.061" y="5" fill="#FF424F" rx=".75" transform="rotate(45 6.06 5)"></rect><rect stroke="none" width="7" height="1.5" fill="#FF424F" rx=".75" transform="scale(-1 1) rotate(45 -11.01 -9.51)"></rect></svg>
                <p>Đăng ký KHÔNG thành công</p>
            </div>
            <div className="Form-cotainner">
                <div className="sign-input flex-row">
                    <input className={userNoti ? "input-fail" : "input-normal"} placeholder="Tên đăng nhập" value={userName} onChange={(e) => handleUserNameChange(e)}></input>
                    {userNoti && <p className="noti-sign">Vui lòng điền vào mục này.</p>}
                </div>
                <div>
                    <div className="sign-input flex-row">
                        <div className={passNoti ? "input-fail space-between flex-row " : "input-normal  flex-row space-between"}>
                            <input className="input-password" placeholder="Mật khẩu" type={isEyeclose ? 'password' : 'text'} value={password} onChange={(e) => handlePassChange(e)}></input>
                            {isEyeclose ? <Eyeclose onClickeye={() => setHidePass(false)} /> : <Eyeopen onClickeye={() => setHidePass(true)} />}
                        </div>

                        {passNoti && <p className="noti-sign">Vui lòng điền vào mục này.</p>}
                    </div>

                </div>
                <button className="signin-button">ĐĂNG KÝ</button>
                <div>
                    <p className="signup-sen"> Bạn đã có tài khoản? <Link to="/signin" className="signup-link">Đăng nhập</Link></p>
                </div>
            </div>
        </form>
    )
}

export default SignupComponent