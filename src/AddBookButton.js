import { Component } from "react";
import Button from "react-bootstrap/Button";

class AddBookButton extends Component {
    render() {
        return (
            <Button variant="success" onClick={this.props.openModal}>Click to Add a Book</Button>
        )
    }
}

export default AddBookButton;