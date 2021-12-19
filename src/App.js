import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header logoutHandler={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks email={this.props.auth0.user.email} /> : <Login />}
            </Route>
            <Route path="/profile">
              {this.props.auth0.isAuthenticated && <Profile />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
