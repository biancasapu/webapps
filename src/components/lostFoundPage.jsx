import React, { Component } from "react";
import Header from "./header";
import Notice from "./notice";
import { Container } from "reactstrap";
import NoticeFormPage from "./noticeFormPage";

export var ns = [
  {
    id: "1",
    title: "Example",
    community: "Birmingham",
    description: "I lost my dog pls help Ill give you good $$$",
    tags: " Bird Orange",
    pictures: null
  },
  {
    id: "2",
    title: "TitleExample",
    community: "Nottingham",
    description: "I wanna find my dog",
    tags: "huge Dog ",
    pictures: null
  },
  {
    id: "3",
    title: "Lost Cat",
    community: "Brighton",
    description: "I lost my cat 2 days ago",
    tags: "fluffy Cat White",
    pictures: null
  },
  {
    id: "4",
    title: "Hello",
    community: "Liverpool",
    description: "My parrot is missing",
    tags: null
  }
];

class LostFoundPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: ns.map(notice => (
        <Notice
          id={notice.id}
          title={notice.title}
          community={notice.community}
          description={notice.description}
          tags={notice.tags}
        />
      ))
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
        <NoticeFormPage />
        <div>{noticeArr}</div>
      </div>
    );
  }
}

export default LostFoundPage;
