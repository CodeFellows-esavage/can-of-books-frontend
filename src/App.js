import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import Login from './Login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: '',
    }
  }

  loginHandler = (userObj) => {
    this.setState({ user: userObj.name, email: userObj.email });
  }

  logoutHandler = () => {
    this.setState({ user: null, email: null });
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} logoutHandler={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks email={this.state.email}/> : <Login email={this.state.email} loginHandler={this.loginHandler} />}
            </Route>
            <Route path="/profile">
              <Profile user={this.state.user} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
