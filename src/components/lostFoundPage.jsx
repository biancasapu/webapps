import React, { Component } from "react";
import Notice from "./notice";
import { Container, Button, Form, FormGroup, Input, Col } from "reactstrap";

class LostFoundPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: []
    };

    this.loadPage = this.loadPage.bind(this);
    //this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {}

  render() {
    const searchBar = (
      <Container style={{ paddingTop: "20px", fontFamily: "Georgia, serif" }}>
        <Form>
          <FormGroup row>
            {/* <Col xs={3} md={2}>
              <Label> Search notice </Label>
            </Col> */}
            <Col xs={9} md={10}>
              <Input
                placeholder="Enter your tags here. (e.g. species, community, colour etc.)"
                name="search"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </Col>
            <Col />
            <FormGroup xs={12} md={2}>
              <Button onClick={this.handleSeacrh}>Search</Button>
            </FormGroup>
            <Col />
          </FormGroup>
        </Form>
      </Container>
    );

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
              lastSeen={notice.lastseen}
            />
          </div>
        ))
      : "";
    var noticeArr = <Container>{not}</Container>;

    return (
      <div style={{ background: "#e6e6ca" }}>
        <div>{searchBar}</div>
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
        this.setState({ notices: response });
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
