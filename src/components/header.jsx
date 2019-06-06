import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NoticeFormPage from "./noticeFormPage";
import LostFoundPage from "./lostFoundPage";
import SplashPage from "./splashPage";
import { Navbar, NavbarBrand, Nav, Row, Col, Container } from "reactstrap";
import GoogleApiWrapper from "./mapsAPI";

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
              <Col xs="3" md="auto">
                <Link style={{ color: "white" }} class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </Col>
              <Col xs="3" md="auto">
                <Link
                  style={{ color: "white" }}
                  class="nav-link"
                  to="/Submit-Page"
                >
                  Submit Notice <span class="sr-only">(current)</span>
                </Link>
              </Col>
              <Col xs="3" md="auto">
                <Link
                  style={{ color: "white" }}
                  class="nav-link"
                  to="/Lost-and-Found"
                >
                  Lost & Found
                </Link>
              </Col>
              <Col xs="3" md="auto">
                <Link style={{ color: "white" }} class="nav-link" to="/Map">
                  Map
                </Link>
              </Col>
            </Row>
          </Container>
          <Nav className="ml-auto" navbar />
        </Navbar>

        <Route exact path="/" component={SplashPage} />
        <Route exact path="/Submit-Page" component={NoticeFormPage} />
        <Route path="/Lost-and-Found" component={LostFoundPage} />
        <Route path="/Map" component={GoogleApiWrapper} />
      </Router>
    );
  }
}

export default Header;
