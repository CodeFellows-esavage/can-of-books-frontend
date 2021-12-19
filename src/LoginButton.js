import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

class LoginButton extends Component {

  // handleAuth0Login = async () => {

  //   await this.props.auth0.loginWithRedirect();
  //   // this.props.loginHandler(this.props.auth0.user);

  // }

  render() {

    return (
      // <Button variant="success" onClick={this.props.onLoginButtonClick}>Log In</Button>
      <Button variant="success" onClick={this.props.auth0.loginWithRedirect}>Log In</Button>
    )
  }
}

export default withAuth0(LoginButton);