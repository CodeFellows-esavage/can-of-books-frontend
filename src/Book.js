import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Book extends Component {

  onEditClick = (e) => {
    this.props.setCurrentBook(this.props.book);
    this.props.openModal(e.target.id);
  }
  handleDeleteClick = () => {
    this.props.deleteBook(this.props.book._id)
  }
  render() {
    return (
      <Card style={{ width: '18rem', backgroundColor: '#f6e9c4' }}>
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.book.status}</Card.Subtitle>
          <Card.Text>
            {this.props.book.description}
          </Card.Text>
          <Card.Text>
            {this.props.book.email}
          </Card.Text>
          <Card.Text>
            <Row style={{ justifyContent: 'space-around' }}>
              <Button id='edit' onClick={this.onEditClick} style={{ width: '6rem' }} variant="outline-secondary">Edit</Button>
              <Button onClick={this.handleDeleteClick} style={{ width: '6rem' }} variant="outline-danger">Delete</Button>
            </Row>
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Book;