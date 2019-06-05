import React, { Component } from "react";
import Notice from "./notice";
import { Container, Button, Form, FormGroup, Input, Col } from "reactstrap";

class LostFoundPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      notices: [],
      ids: [],
      search: ""
    };

    this.loadPage = this.loadPage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
    console.log(this.state);
  }

  handleSearch() {
    var tagsUri = "http://webapps05backend.herokuapp.com/search/";
    const tags = this.state.search.split(" ");
    this.setState({ notices: [], ids: [] });
    console.log(tags);
    for (var i = 0; i < tags.length - 1; i++) {
      tagsUri = tagsUri + tags[i] + "%20";
    }
    tagsUri = tagsUri + tags[tags.length - 1];
    fetch(tagsUri)
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({
          notices: this.state.notices.concat(response)
        });
      });
  }

  render() {
    const searchBar = (
      <Container style={{ paddingTop: "20px", fontFamily: "Georgia, serif" }}>
        <Form>
          <FormGroup row>
            {/* <Col xs={3} md={2}>
              <Label> Search notice </Label>
            </Col> */}
            <Col>
              <Input
                placeholder="Enter your tags here. (e.g. species community colour etc.)"
                name="search"
                value={this.state.search}
                onChange={this.handleSearchChange}
              />
            </Col>
            <FormGroup xs={12} md={2} style={{ paddingRight: "20px" }}>
              <Button onClick={this.handleSearch}>Search</Button>
            </FormGroup>
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
    fetch("http://webapps05backend.herokuapp.com/notice/*")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ notices: response });
      });
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadPage();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default LostFoundPage;
