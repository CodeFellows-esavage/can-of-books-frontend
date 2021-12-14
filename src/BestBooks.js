import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book.js';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.getBooks();
  }

  async getBooks() {
    const url = `${process.env.REACT_APP_BACKEND}/books`
    const returnedBooks = await axios.get(url);
    this.setState({ books: returnedBooks.data }, console.log(this.state.books));
    console.log("here is a message", this.state.books);
  } 

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map(bookObj => <Carousel.Item key={bookObj._id}><Book book={bookObj} /></Carousel.Item>)}
          </Carousel>
          // this.state.books.map(bookObj => <li>{bookObj.title}</li>)

        ) : (
          <h3>No Books Found :(</h3>

        )}
      </>
    )
  }
}

export default BestBooks;
