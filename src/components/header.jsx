import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import LostFoundPage from "./lostFoundPage";
import { Navbar, NavItem, NavbarBrand, Nav } from "reactstrap";

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     main: () => <h2> Home </h2>
//   },
//   {
//     path: "/Lost-and-Found",
//     main: () => <LostFoundPage />
//   }
// ];

class Header extends Component {
  render() {
    return (
      // <nav class="navbar navbar-dark bg-dark">
      <Navbar color="dark" dark>
        <NavbarBrand className="logo" style={{ color: "white" }}>
          Petabase
        </NavbarBrand>
        {/* <Router>w
          <div>
            <Link class="nav-link" to="/">
              Dashboard <span class="sr-only">(current)</span>
            </Link>

            <Link class="nav-link" to="/Lost-and-Found">
              Lost & Found
            </Link>

            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </div>

          <div>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </div>
        </Router> */}
        <Nav className="ml-auto" navbar>
          <NavItem
            style={{
              color: "white"
            }}
          >
            Lost & Found
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
