import React from 'react';

import { Navbar } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    const navbarInstance = (
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Planet-Reactor</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
    return navbarInstance;
  }
}
export default NavBar;
