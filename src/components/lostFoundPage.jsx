import React, { Component } from "react";
import Header from "./header";
import Notice from "./notice";
import { Row, Col } from "reactstrap";

class LostFoundPage extends Component {
  render() {
    this.state = {
      notices: [<Notice />, <Notice />, <Notice />, <Notice />]
    };

    var noticeArr = (
      <Col md={{ size: 8, offset: 3 }}>
        {this.state.notices.map(notice => (
          <Row>{notice}</Row>
        ))}
      </Col>
    );

    return (
      <div style={{ background: "#e6e6ca" }}>
        <Header />
        <div>{noticeArr}</div>
      </div>
    );
  }
}

export default LostFoundPage;
