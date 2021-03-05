import './App.css';
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
