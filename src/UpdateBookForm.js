import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateBookForm extends Component {
  render() {
    return (
      <Form id='updateBookForm' onSubmit={this.props.handleBookFormSubmit}>
        <h3>Edit your book:</h3>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="text" placeholder="Book title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Read, Reading, OR Unread" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default UpdateBookForm;