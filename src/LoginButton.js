import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showform: false,
    }
  }
  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      // <button onClick={this.props.onLogin}>
      //   Log In
      // </button>
      <Link to="/login">
        <Button variant="primary">Log In</Button>
      </Link>
    )
  }
}
