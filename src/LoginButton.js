import { Component } from 'react';

export default class LoginButton extends Component {

  render() {

    return (
      <button onClick={this.props.onLoginButtonClick}>
        Log In
      </button>
    )
  }
}
