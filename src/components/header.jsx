import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NoticeFormPage from "./noticeFormPage";
import LostFoundPage from "./lostFoundPage";
import { Navbar, NavbarBrand, Nav, Row, Col, Container } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar color="dark" dark style={{ fontFamily: "Georgia, serif" }}>
          <Container>
            <Row>
              <Col xs="12" md="auto" style={{ textAlign: "center" }}>
                <NavbarBrand className="logo" style={{ color: "white" }}>
                  Petabase
                </NavbarBrand>
              </Col>
              <Col xs="6" md="auto">
                <Link style={{ color: "white" }} class="nav-link" to="/">
                  Submit Notice <span class="sr-only">(current)</span>
                </Link>
              </Col>
              <Col xs="6" md="auto">
                <Link
                  style={{ color: "white" }}
                  class="nav-link"
                  to="/Lost-and-Found"
                >
                  Lost & Found
                </Link>
              </Col>
            </Row>
          </Container>
          <Nav className="ml-auto" navbar />
        </Navbar>

        <Route exact path="/" component={NoticeFormPage} />
        <Route path="/Lost-and-Found" component={LostFoundPage} />
      </Router>
    );
  }
}

export default Header;
