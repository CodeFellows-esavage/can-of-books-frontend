import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {

  render() {
    return (
      <Card style={{ width: '24rem', textAlign: 'left' }}>
        <Row style={{ alignItems: 'center' }}>
          <Col md="auto">
            <Card.Img style={{ width: '4rem', marginLeft: '1rem' }} variant="top" src={this.props.auth0.user.picture} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>User: {this.props.auth0.user.name}</Card.Title>
              <Card.Text>Email: {this.props.auth0.user.email}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    )
  }
};

export default withAuth0(Profile);
