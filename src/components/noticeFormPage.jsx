import React, { Component } from "react";
import Notice from "./notice.jsx";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Alert,
  Row,
  ButtonGroup
} from "reactstrap";

class NoticeFormPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      community: "",
      description: "",
      lastSeen: "",
      contact: "",
      species: "",
      colour: "",
      gender: "",
      neutered: "",
      pic1: "",
      pic2: "",
      pic3: "",
      tags: "",
      found: "",
      visible: false,
      notices: [],
      hasSuggestions: false,
      suggestions: 0
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCommunityChange = this.handleCommunityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handleColourChange = this.handleColourChange.bind(this);
    this.handleLastSeenChange = this.handleLastSeenChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleNeuteredChange = this.handleNeuteredChange.bind(this);
    this.handlePic1Change = this.handlePic1Change.bind(this);
    this.handlePic2Change = this.handlePic2Change.bind(this);
    this.handlePic3Change = this.handlePic3Change.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleFoundChange = this.handleFoundChange.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  async uploadImage(picNo, e) {
    const r = new XMLHttpRequest();
    const d = new FormData();
    var u;

    d.append("image", e);

    r.open("POST", "https://api.imgur.com/3/image", false);
    r.setRequestHeader("Authorization", "Client-ID c6782e7ec6ba599");
    r.onreadystatechange = () => {
      if (r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText);
        u = "https://i.imgur.com/" + res.data.id + ".png";
        if (picNo === 1) {
          this.setState({ pic1: u });
        }
        if (picNo === 2) {
          this.setState({ pic2: u });
        }

        if (picNo === 3) {
          this.setState({ pic3: u });
        }
      }
    };

    r.send(d);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(this.state);
  }

  handleCommunityChange(event) {
    var s = [];
    for (var i = 0; i < this.state.notices.length; i++) {
      if (this.state.notices[i].community === event.target.value) {
        s.push(this.state.notices[i]);
      }
    }
    console.log(s);
    var curr = this.state.suggestions + 1;
    var display = curr >= 4;
    this.setState({
      community: event.target.value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
    console.log(this.state);
  }

  handlePostCodeChange(event) {
    this.setState({ postcode: event.target.value });
    console.log(this.state);
  }
  handleSpeciesChange(value) {
    var s = this.state.notices.filter(notice => {
      return notice.tags.includes(value);
    });
    var curr = this.state.suggestions + 1;
    var display = curr >= 4;
    this.setState({
      species: value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }

  handleColourChange(event) {
    var s = [];
    for (var i = 0; i < this.state.notices.length; i++) {
      if (this.state.notices[i].tags.includes(event.target.value)) {
        s.push(this.state.notices[i]);
      }
    }
    var curr = this.state.suggestions + 1;
    var display = curr >= 4;
    this.setState({
      colour: event.target.value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }

  handlePic1Change(event) {
    this.setState({ pic1: event.target.files[0] });
    console.log(this.state);
  }
  handlePic2Change(event) {
    this.setState({ pic2: event.target.files[0] });
    console.log(this.state);
  }

  handlePic3Change(event) {
    this.setState({ pic3: event.target.files[0] });
    console.log(this.state);
  }

  handleTagsChange(event) {
    this.setState({ tags: event.target.value });
    console.log(this.state);
  }

  handleContactChange(event) {
    this.setState({ contact: event.target.value });
    console.log(this.state);
  }

  handleGenderChange(value) {
    // var s = this.state.notices.filter(notice => {
    //   return notice.tags.includes(value);
    // });
    var s = [];
    for (var i = 0; i < this.state.notices.length; i++) {
      if (this.state.notices[i].tags.includes(value)) {
        s.push(this.state.notices[i]);
      }
    }

    var curr = this.state.suggestions + 1;
    var display = curr >= 4;
    this.setState({
      gender: value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });
    console.log(this.state);
  }

  handleLastSeenChange(event) {
    this.setState({ lastSeen: event.target.value });
    console.log(this.state);
  }

  handleNeuteredChange(event) {
    var s = [];
    for (var i = 0; i < this.state.notices.length; i++) {
      if (this.state.notices[i].tags.includes(event.target.value)) {
        s.push(this.state.notices[i]);
      }
    }
    var curr = this.state.suggestions + 1;
    var display = curr >= 4;
    this.setState({
      neutered: event.target.value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }

  handleFoundChange(value) {
    var s = this.state.notices.filter(notice => {
      // If the person lost the dog, we're looking for found notices and vice versa
      return !notice.tags.includes(value);
    });
    var curr = this.state.suggestions + 1;
    var display = curr >= 4;
    this.setState({
      found: value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }
  onDismiss() {
    this.setState({ hasSuggestions: false });
  }

  handleSubmit() {
    var maxId;
    fetch("http://webapps05backend.herokuapp.com/notice/max/id")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log("response about maxid from backend");
        console.log(response);
        maxId = parseInt(response[0] ? response[0].id : "0") + 1;
        console.log("new maxid is " + maxId);
        this.uploadImage(1, this.state.pic1);
        this.uploadImage(2, this.state.pic2);
        this.uploadImage(3, this.state.pic3);
        return maxId;
      })
      .then(maxId => {
        fetch("http://webapps05backend.herokuapp.com/submit", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: maxId,
            title: this.state.title,
            community: this.state.community,
            description: this.state.description,
            postcode: this.state.postcode,
            contact: this.state.contact,
            lastSeen: this.state.lastSeen,
            tags:
              String.prototype.toLowerCase.apply(this.state.species) +
              " " +
              String.prototype.toLowerCase.apply(this.state.colour) +
              " " +
              String.prototype.toLowerCase.apply(this.state.tags) +
              " " +
              String.prototype.toLowerCase.apply(this.state.gender) +
              " " +
              String.prototype.toLowerCase.apply(this.state.neutered) +
              " " +
              String.prototype.toLowerCase.apply(this.state.found) +
              " " +
              String.prototype.toLowerCase.apply(this.state.community),
            pic1: this.state.pic1,
            pic2: this.state.pic2,
            pic3: this.state.pic3
          })
        });

        this.setState({
          title: "",
          community: "",
          description: "",
          postcode: "",
          species: "",
          colour: "",
          contact: "",
          gender: "",
          neutered: "",
          lastSeen: "",
          pic3: "",
          pic2: "",
          pic1: "",
          tags: "",
          visible: true,
          found: ""
        });

        setTimeout(() => {
          this.setState({
            visible: false
          });
        }, 3000);
      });
  }

  render() {
    return (
      <div style={{ background: "#e6e6ca", fontSize: "20px" }}>
        <Container style={{ paddingTop: "20px" }}>
          <Form>
            <FormGroup row>
              <Label sm={2}> Title of Notice </Label>
              <Col sm={10}>
                <Input
                  placeholder="What is this notice called?"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Community</Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="community"
                  placeholder="choose"
                  value={this.state.community}
                  onChange={this.handleCommunityChange}
                >
                  <option />
                  <option>London</option>
                  <option>Nottingham</option>
                  <option>Brighton</option>
                  <option>Birmingham</option>
                  <option>Liverpool</option>
                </Input>
              </Col>
            </FormGroup>
            <Container>
              <Row>
                <Col sm={12} md={3} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "30px" }}>This pet is</Label>
                </Col>

                <Col sm={12} md={9} style={{ textAlign: "center" }}>
                  <ButtonGroup>
                    <Button
                      onClick={() => this.handleFoundChange("lost")}
                      active={this.state.found === "lost"}
                      size="lg"
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                    >
                      Lost
                    </Button>
                    <Button
                      active={this.state.found === "found"}
                      size="lg"
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                      onClick={() => this.handleFoundChange("found")}
                    >
                      Found
                    </Button>
                  </ButtonGroup>
                </Col>

                <Col sm={12} md={3} />
              </Row>
            </Container>
            <Container style={{ padding: "10px" }}>
              <Row>
                <Col sm={12} md={3} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "30px" }}>Species</Label>
                </Col>
                <Col sm={12} md={9} style={{ textAlign: "center" }}>
                  <ButtonGroup>
                    <Button
                      size="lg"
                      onClick={() => this.handleSpeciesChange("dog")}
                      active={this.state.species === "dog"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                    >
                      {" "}
                      Dog{" "}
                    </Button>
                    <Button
                      size="lg"
                      active={this.state.species === "cat"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                      onClick={() => this.handleSpeciesChange("cat")}
                    >
                      {" "}
                      Cat{" "}
                    </Button>
                    <Button
                      size="lg"
                      active={this.state.species === "bird"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                      onClick={() => this.handleSpeciesChange("bird")}
                    >
                      {" "}
                      Bird{" "}
                    </Button>
                    <Button
                      size="lg"
                      onClick={() => this.handleSpeciesChange("other")}
                      active={this.state.species === "other"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                    >
                      {" "}
                      Other{" "}
                    </Button>
                  </ButtonGroup>
                </Col>
                <Col sm={12} md={3} />
              </Row>
            </Container>

            <Container style={{ paddingBottom: "15px" }}>
              <Row>
                <Col sm={12} md={3} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "20px" }}>Gender</Label>
                </Col>
                <Col sm={12} md={9} style={{ textAlign: "center" }}>
                  <ButtonGroup>
                    <Button
                      size="lg"
                      onClick={() => this.handleGenderChange("female")}
                      active={this.state.gender === "female"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                    >
                      {" "}
                      Female{" "}
                    </Button>
                    <Button
                      size="lg"
                      active={this.state.gender === "male"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                      onClick={() => this.handleGenderChange("male")}
                    >
                      {" "}
                      Male{" "}
                    </Button>
                    <Button
                      size="lg"
                      active={this.state.gender === "male female"}
                      style={{
                        borderColor: "#634839",
                        backgroundColor: "#95c18f"
                      }}
                      onClick={() => this.handleGenderChange("male female")}
                    >
                      {" "}
                      Unknown{" "}
                    </Button>
                  </ButtonGroup>
                </Col>

                <Col sm={12} md={5} />
              </Row>
            </Container>
            <FormGroup row>
              <Label sm={2}> Colour </Label>
              <Col sm={4}>
                <Input
                  type="select"
                  name="colour"
                  value={this.state.colour}
                  onChange={this.handleColourChange}
                >
                  <option />
                  <option>cream</option>
                  <option>white</option>
                  <option>orange</option>
                  <option>black</option>
                  <option>brown</option>
                  <option>grey</option>
                </Input>
              </Col>
              <Label sm={2}> Neutered </Label>
              <Col sm={4}>
                <Input
                  type="select"
                  name="neutered"
                  value={this.state.neutered}
                  onChange={this.handleNeuteredChange}
                >
                  <option />
                  <option>neutered</option>
                  <option>intact</option>
                </Input>
              </Col>
            </FormGroup>
            <Alert
              color="success"
              isOpen={this.state.hasSuggestions}
              toggle={this.onDismiss}
            >
              <div>
                <Container>
                  <Row>
                    <Col xs="12" md="2" />
                    <Col xs="12" md="10">
                      {this.state.notices.map(notice => {
                        return (
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
                        );
                      })}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Alert>
            <FormGroup row>
              <Label sm={2}> Description of pet</Label>

              <Col sm={10}>
                <Input
                  placeholder="What name it responds to, any defining physical features etc."
                  name="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Post Code </Label>
              <Col sm={10}>
                <Input
                  placeholder="Your postcode, e.g. NG8 2JN"
                  name="postcode"
                  value={this.state.postcode}
                  onChange={this.handlePostCodeChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Last Seen </Label>
              <Col sm={10}>
                <Input
                  placeholder="Date/ time you last saw your pet"
                  value={this.state.lastSeen}
                  onChange={this.handleLastSeenChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}> Contact info </Label>
              <Col sm={10}>
                <Input
                  placeholder="Contact details such as address/ phone number etc"
                  value={this.state.contact}
                  onChange={this.handleContactChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Image</Label>
              <Col sm={5}>
                <Input
                  type="file"
                  name="pic1"
                  className="fileInput"
                  onChange={this.handlePic1Change}
                  style={{ marginBottom: "5px" }}
                />

                <Input
                  type="file"
                  name="pic2"
                  className="fileInput"
                  onChange={this.handlePic2Change}
                  style={{ marginBottom: "5px" }}
                />

                <Input
                  type="file"
                  name="pic3"
                  className="fileInput"
                  onChange={this.handlePic3Change}
                  style={{ marginBottom: "5px" }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="exampleFile">
                Tags
              </Label>
              <Col>
                <Input
                  placeholder="Enter your tags here (microchipped, breed etc...)"
                  type="text"
                  name="tags"
                  value={this.state.tags}
                  style={{ marginBottom: "5px" }}
                  onChange={this.handleTagsChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </FormGroup>
          </Form>
          <Alert
            color="success"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            Submitting your notice...
          </Alert>
        </Container>
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

export default NoticeFormPage;
