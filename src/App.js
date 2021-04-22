/*import logo from './logo.svg';*/
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/pages';
import SigninPage from './components/pages/signin';
import SignUp from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component= {SignUp} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
