import React from 'react';
import axios from 'axios';
import Book from './Book.js';
import Carousel from 'react-bootstrap/Carousel';
import AddBookButton from './AddBookButton.js';
import BookFormModal from './BookFormModal.js';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookModal: false,
    }
  }

  componentDidMount() {
    this.getBooks();
  }
  openModal = () => {
    this.setState({ showBookModal: true });
  }

  closeModal = () => {
    this.setState({ showBookModal: false });
  }

  async getBooks() {
    const url = `${process.env.REACT_APP_BACKEND}/books?email=${this.props.email}`;
    const returnedBooks = await axios.get(url);
    this.setState({ books: returnedBooks.data }, console.log(this.state.books));
    console.log("here is a message", this.state.books);
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map(bookObj => <Carousel.Item key={bookObj._id}><Book book={bookObj} /></Carousel.Item>)}
          </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}
        <BookFormModal closeModal={this.closeModal} showBookModal={this.state.showBookModal} />
        <AddBookButton openModal={this.openModal} />

      </>
    )
  }
}

export default BestBooks;
