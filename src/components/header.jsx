import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NoticeFormPage from "./noticeFormPage";
import LostFoundPage from "./lostFoundPage";
import { Navbar, NavbarBrand, Nav } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar color="dark" dark style={{ fontFamily: "Georgia, serif" }}>
          <NavbarBrand className="logo" style={{ color: "white" }}>
            Petabase
          </NavbarBrand>
          <Link style={{ color: "white" }} class="nav-link" to="/">
            Submit Notice <span class="sr-only">(current)</span>
          </Link>
          <Link
            style={{ color: "white" }}
            class="nav-link"
            to="/Lost-and-Found"
          >
            Lost & Found
          </Link>

          <Nav className="ml-auto" navbar />
        </Navbar>

        <Route exact path="/" component={NoticeFormPage} />
        <Route path="/Lost-and-Found" component={LostFoundPage} />
      </Router>
    );
  }
}

export default Header;
