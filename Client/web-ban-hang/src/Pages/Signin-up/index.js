import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SignHeader from '../../Components/Vinh/SignHeader'
import SigninComponent from '../../Components/Vinh/SignInComponent'
import SignupComponent from '../../Components/Vinh/SignupComponent'
import './style.css'


function Signpage() {
    return (
        <div className="Sign">
            <Router>
                <SignHeader />

                <div className="Body-sign flex-row">
                    <div className="Sign-container flex-row ">
                        <Switch>
                            <Route exact path="/signin" component={SigninComponent} />
                            <Route exact path="/signin/signup" component={SignupComponent} />
                        </Switch>

                    </div>
                </div>
            </Router>

        </div>
    )
}

export default Signpage