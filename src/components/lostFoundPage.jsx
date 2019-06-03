import React, { Component } from "react";
import Notice from "./notice";
import { Container } from "reactstrap";

class LostFoundPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: []
    };

    this.loadPage = this.loadPage.bind(this);
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
              postcode={notice.postcode}
              tags={notice.tags}
              pic1={notice.pic1}
              pic2={notice.pic2}
              pic3={notice.pic3}
              contact={notice.contact}
              lastSeen={notice.lastSeen}
            />
          </div>
        ))
      : "";
    var noticeArr = <Container>{not}</Container>;

    return (
      <div style={{ background: "#e6e6ca" }}>
        <div>{noticeArr}</div>
      </div>
    );
  }

  loadPage() {
    fetch("https://webapps05backend.herokuapp.com/notice/*")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ notices: response.DATA });
      });
  }

  componentDidMount() {
    this.loadPage();
    setInterval(() => {
      this.loadPage();
    }, 5000);
  }
}

export default LostFoundPage;
