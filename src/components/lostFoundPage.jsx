import React, { Component } from "react";
import Header from "./header";
import Notice from "./notice";
import { Container } from "reactstrap";

class LostFoundPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: [<Notice />, <Notice />, <Notice />, <Notice />]
    };
  }
  render() {
    var noticeArr = (
      <Container>
        {this.state.notices.map(notice => (
          <div>{notice}</div>
        ))}
      </Container>
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
