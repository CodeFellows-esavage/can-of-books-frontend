import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* <NavItem>{this.props.user ? <Link to="/profile" className="nav-link">Profile</Link> : <Link to="/" className="nav-link">Profile</Link>} </NavItem> */}
        <NavItem>{this.props.user && <Link to="/profile" className="nav-link">Profile</Link>} </NavItem>
        <NavItem>{this.props.user && <LogoutButton logoutHandler={this.props.logoutHandler} />}</NavItem>
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default Header;
