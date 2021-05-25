import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Home'
import Signpage from './Pages/Signin-up'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" ><Header/><Homepage/></Route>
          <Route path="/signin" component={Signpage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
