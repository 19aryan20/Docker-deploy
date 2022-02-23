import React from 'react';
import { Switch, Route} from "react-router-dom";
import Logout from './components/Logout'
import Signin from './components/Signin'
import About from './components/About.jsx'
import Login from './components/Login'
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
    <Navbar />
    <Switch> 
      <Route exact path="/logout"  component={Logout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/about" component={About} />
    </Switch>
    </>
  );
}

export default App;