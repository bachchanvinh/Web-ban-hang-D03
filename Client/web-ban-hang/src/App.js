import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Home'
import Signinpage from './Pages/Signin'
import Signuppage from './Pages/Signup'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Homepage,Header}/>
          <Route path="/signin" component={Signinpage}/>
          <Route path="/signup" component={Signuppage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
