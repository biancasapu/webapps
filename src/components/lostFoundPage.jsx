import React, { Component } from "react";
import Header from "./header";
import Notice from "./notice";
import { Container } from "reactstrap";
import NoticeFormPage from "./noticeFormPage";

class LostFoundPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: []
    };
  }

  render() {
    const not = this.state
      ? this.state.notices.map(notice => (
          <div>
            <Notice
              id={notice.id}
              title={notice.title}
              community={notice.community}
              description={notice.description}
              tags={notice.tags}
            />
          </div>
        ))
      : "";
    var noticeArr = <Container>{not}</Container>;

    return (
      <div style={{ background: "#e6e6ca" }}>
        <Header />
        <NoticeFormPage />
        <div>{noticeArr}</div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Hi");
    fetch("https://webapps05backend.herokuapp.com/notice/*")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ notices: response.DATA });
      });
  }
}

export default LostFoundPage;
