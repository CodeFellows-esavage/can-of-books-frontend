import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      name: e.target.username.value,
      email: e.target.email.value,
    };
    this.props.loginHandler(userObj);
  }

  render() {
  
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default LoginForm;
