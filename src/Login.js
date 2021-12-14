import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
import LoginForm from './LoginForm';


class Login extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    showLoginForm: false,
  }
}

onLoginButtonClick = () => this.setState({showLoginForm: true});

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {this.state.showLoginForm ? <LoginForm loginHandler={this.props.loginHandler}/> : <LoginButton onLoginButtonClick={this.onLoginButtonClick}/> }
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
