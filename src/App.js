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
import LoginButton from './LoginButton';
import LoginForm from './LoginForm.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: '',
    }
  }

  loginHandler = (user) => {
    user.preventDefault();

    this.setState({
      user: user.target[1].value,
      email: user.target[0].value,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  }

  render() {
    return (
      <>

        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks /> : <LoginButton onLogin={this.loginHandler} />}
            </Route>
            <Route path="/profile">
              <Profile user={this.state.user} />
            </Route>
            <Route path="/login">
              <LoginForm user={this.state.user} loginHandler={this.loginHandler} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
