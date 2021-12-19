import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LogoutButton extends Component {

  render() {
    return (
      <button onClick={this.props.auth0.logout}>
        Log Out
      </button>
    );
  }
};

export default withAuth0(LogoutButton);
