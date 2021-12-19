import { Component } from "react";
import Button from "react-bootstrap/Button";

class AddBookButton extends Component {

  onAddClick = (e) => {
    this.props.openModal(e.target.id);
  }
  
  render() {
    return (
      <Button id='add' variant="success" onClick={this.onAddClick} style={{ margin: '1rem' }}>Click to Add a Book</Button>
    )
  }
}

export default AddBookButton;