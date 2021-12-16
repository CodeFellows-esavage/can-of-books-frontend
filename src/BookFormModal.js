import { Component } from 'react';
import AddBookForm from './AddBookForm';
import Modal from 'react-bootstrap/Modal';
import UpdateBookForm from './UpdateBookForm';

class BookFormModal extends Component {

  // handleClose(e) {
  //     console.log(e);
  //     //variable that controlls show setState to false
  // }
  render() {
    return (
      // <Modal show={show} onHide={handleClose}>
      <Modal show={this.props.showBookModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {this.props.isAdding ?
            <AddBookForm handleBookFormSubmit={this.props.handleBookFormSubmit} /> :
            <UpdateBookForm handleBookFormSubmit={this.props.handleBookFormSubmit}/>
          }
        </Modal.Body>
      </Modal>

    )
  }
}

export default BookFormModal;