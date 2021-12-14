import { Component } from 'react';

export default class LoginButton extends Component {

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <button onClick={this.props.onLoginButtonClick}>
        Log In
      </button>
    )
  }
}
