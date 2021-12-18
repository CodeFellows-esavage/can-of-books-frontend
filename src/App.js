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
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: '',
    }
  }

  loginHandler = (userObj) => {
    console.log(userObj);
    this.setState({ user: userObj.name, email: userObj.email }, console.log(userObj));
  }

  logoutHandler = () => {
    this.setState({ user: null, email: null });
  }

  // componentDidMount() {
  //   console.log(this.props.auth0.isAuthenticated);
  //   console.log(this.props.auth0.user);
  //   // if (this.props.auth0.isAuthenticated) this.setState({ user: this.props.auth0.user.name, email: this.props.auth0.email });
  // }

  componentDidUpdate() {
    console.log(this.props.auth0.isAuthenticated);
    console.log(this.props.auth0.user);
    if (this.props.auth0.isAuthenticated) this.setState({ user: this.props.auth0.user.name, email: this.props.auth0.email });
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} logoutHandler={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks email={this.state.email} /> : <Login email={this.state.email} loginHandler={this.loginHandler} />}
              {/* {this.props.auth0.isAuthenticated && <p>You are authenticated{console.log(this.props.auth0.isAuthenticated)}</p>} */}
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

export default withAuth0(App);
