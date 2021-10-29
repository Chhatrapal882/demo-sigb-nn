import './App.css';
import Signup from './container/Signup';
import Login from './container/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './container/Home';
import Users from './container/Users';
import Protected from './container/Protected'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setusers } from './container/action/action';

function App() {
  // const dispatch = useDispatch()
  // const user = useSelector(state => state)
  // useEffect(() => {
  //  if(localStorage.getItem('token')){
  //   axios.get('http://localhost:8080/users')
  //     .then(res => {
  //       console.log(res.data);
  //         dispatch(setusers(res.data))
  //     }
  //     )
  //     .catch(err => console.log(err))
  //  }  
  //  console.log(user);
  // }, [])

  return (
    <div className="App container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/users">
            <Protected cms={Users} />
          </Route>
          <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
