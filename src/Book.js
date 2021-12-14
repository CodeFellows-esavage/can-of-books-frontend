import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Book extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.book.status}</Card.Subtitle>
                    <Card.Text>
                        {this.props.book.description}
                    </Card.Text>
                    <Card.Text>
                        {this.props.book.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Book;