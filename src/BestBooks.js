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
    this.setState({ books: returnedBooks.data });
  }

  postBook = async (newBook) => {
    try {
      const bookResponse = await axios.post(`${process.env.REACT_APP_BACKEND}/books`, newBook);
      this.setState({ books: [...this.state.books, bookResponse.data] });
    } catch (e) {
      console.error(e);
    }
  }

  handleBookFormSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: this.props.email,
    };
    this.closeModal();
    this.postBook(newBook);
  }

  deleteBook = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND}/books/${id}?email=${this.props.email}`);
      const updatedBookArr = this.state.books.filter(book => book._id !== id);
      this.setState({ books: updatedBookArr }, console.log(this.state.books));

    } catch (e) {
      console.error(e);
    }

  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map(bookObj => <Carousel.Item key={bookObj._id}><Book book={bookObj} deleteBook={this.deleteBook} /></Carousel.Item>)}
          </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}
        <BookFormModal handleBookFormSubmit={this.handleBookFormSubmit} closeModal={this.closeModal} showBookModal={this.state.showBookModal} />
        <AddBookButton openModal={this.openModal} />

      </>
    )
  }
}

export default BestBooks;
