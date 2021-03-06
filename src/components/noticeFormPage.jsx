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
import cat from "../img/transparentcat.png";
import dog from "../img/transparentdog.png";
import bird from "../img/transparentbird.png";
import female from "../img/transparentfem.png";
import male from "../img/transparentmale.png";
import unknown from "../img/transparentunkn.png";

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
      filtered: [],
      hasSuggestions: false,
      suggestions: 0,
      seenby: 0
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
    s = this.state.notices.filter(notice => {
      return (
        (this.state.species === "" ||
          notice.tags.includes(this.state.species)) &&
        (this.state.colour === "" || notice.tags.includes(this.state.colour)) &&
        (this.state.neutered === "" ||
          notice.tags.includes(this.state.neutered)) &&
        (this.state.gender === "" ||
          notice.tags.includes(" " + this.state.gender)) &&
        notice.tags.includes(
          String.prototype.toLowerCase.apply(event.target.value)
        ) &&
        (this.state.found === "" || !notice.tags.includes(this.state.found))
      );
    });

    console.log(s);
    var curr = this.state.suggestions + 1;
    var display = curr >= 4 && s.length > 0;
    this.setState({
      community: event.target.value,
      filtered: s,
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
    var s = [];
    s = this.state.notices.filter(notice => {
      return (
        (this.state.community === "" ||
          notice.tags.includes(
            String.prototype.toLowerCase.apply(this.state.community)
          )) &&
        (this.state.colour === "" || notice.tags.includes(this.state.colour)) &&
        (this.state.neutered === "" ||
          notice.tags.includes(this.state.neutered)) &&
        (this.state.gender === "" ||
          notice.tags.includes(" " + this.state.gender)) &&
        notice.tags.includes(value) &&
        (this.state.found === "" || !notice.tags.includes(this.state.found))
      );
    });

    console.log(s);
    var curr = this.state.suggestions + 1;
    var display = curr >= 4 && s.length > 0;
    this.setState({
      species: value,
      filtered: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }

  handleColourChange(event) {
    var s = [];
    s = this.state.notices.filter(notice => {
      return (
        (this.state.community === "" ||
          notice.tags.includes(
            String.prototype.toLowerCase.apply(this.state.community)
          )) &&
        (this.state.species === "" ||
          notice.tags.includes(this.state.species)) &&
        (this.state.neutered === "" ||
          notice.tags.includes(this.state.neutered)) &&
        (this.state.gender === "" ||
          notice.tags.includes(" " + this.state.gender)) &&
        notice.tags.includes(event.target.value) &&
        (this.state.found === "" || !notice.tags.includes(this.state.found))
      );
    });

    console.log(s);
    var curr = this.state.suggestions + 1;
    var display = curr >= 4 && s.length > 0;
    this.setState({
      colour: event.target.value,
      filtered: s,
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
    var s = [];
    if (value === "male female") {
      s = this.state.notices.filter(notice => {
        return (
          (String.prototype.toLowerCase.apply(this.state.community) === "" ||
            notice.tags.includes(
              String.prototype.toLowerCase.apply(this.state.community)
            )) &&
          (this.state.species === "" ||
            notice.tags.includes(this.state.species)) &&
          (this.state.neutered === "" ||
            notice.tags.includes(this.state.neutered)) &&
          (this.state.colour === "" ||
            notice.tags.includes(this.state.colour)) &&
          (this.state.found === "" || !notice.tags.includes(this.state.found))
        );
      });
    } else {
      s = this.state.notices.filter(notice => {
        return (
          (String.prototype.toLowerCase.apply(this.state.community) === "" ||
            notice.tags.includes(
              String.prototype.toLowerCase.apply(this.state.community)
            )) &&
          (this.state.species === "" ||
            notice.tags.includes(this.state.species)) &&
          (this.state.neutered === "" ||
            notice.tags.includes(this.state.neutered)) &&
          (this.state.colour === "" ||
            notice.tags.includes(this.state.colour)) &&
          notice.tags.includes(" " + value) &&
          (this.state.found === "" || !notice.tags.includes(this.state.found))
        );
      });
    }
    console.log(s);
    var curr = this.state.suggestions + 1;
    var display = curr >= 4 && s.length > 0;
    this.setState({
      gender: value,
      filtered: s,
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
    s = this.state.notices.filter(notice => {
      return (
        (this.state.community === "" ||
          notice.tags.includes(
            String.prototype.toLowerCase.apply(this.state.community)
          )) &&
        (this.state.species === "" ||
          notice.tags.includes(this.state.species)) &&
        (this.state.gender === "" ||
          notice.tags.includes(" " + this.state.gender)) &&
        (this.state.colour === "" || notice.tags.includes(this.state.colour)) &&
        notice.tags.includes(event.target.value) &&
        (this.state.found === "" || !notice.tags.includes(this.state.found))
      );
    });
    console.log(s);
    var curr = this.state.suggestions + 1;
    var display = curr >= 4 && s.length > 0;
    this.setState({
      neutered: event.target.value,
      notices: s,
      suggestions: curr,
      hasSuggestions: display
    });

    console.log(this.state);
  }

  handleFoundChange(value) {
    var s = [];
    s = this.state.notices.filter(notice => {
      return (
        (this.state.community === "" ||
          notice.tags.includes(
            String.prototype.toLowerCase.apply(this.state.community)
          )) &&
        (this.state.species === "" ||
          notice.tags.includes(this.state.species)) &&
        (this.state.gender === "" ||
          notice.tags.includes(" " + this.state.gender)) &&
        (this.state.colour === "" || notice.tags.includes(this.state.colour)) &&
        !notice.tags.includes(value) &&
        (this.state.neutered === "" ||
          notice.tags.includes(this.state.neutered))
      );
    });
    console.log(s);

    var curr = this.state.suggestions + 1;
    var display = curr >= 4 && s.length > 0;
    this.setState({
      found: value,
      filtered: s,
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
            pic3: this.state.pic3,
            seenby: this.state.seenby
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
      <div style={{ background: "#bdecb6", fontSize: "20px" }}>
        <Container style={{ paddingTop: "20px" }}>
          <Form>
            <Container>
              <Row>
                <Col sm={12} md={3} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "10px" }}>This pet is</Label>
                </Col>

                <Col sm={12} md={9} style={{ textAlign: "center" }}>
                  <ButtonGroup>
                    <Button
                      color="success"
                      onClick={() => this.handleFoundChange("lost")}
                      active={this.state.found === "lost"}
                      size="lg"
                      style={{
                        paddingLeft: "30px",
                        borderColor: "#634839",
                        paddingRight: "30px"
                      }}
                    >
                      Lost
                    </Button>
                    <Button
                      color="success"
                      active={this.state.found === "found"}
                      size="lg"
                      style={{
                        paddingLeft: "30px",
                        borderColor: "#634839",
                        paddingRight: "30px"
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
                  <Label style={{ paddingTop: "15px" }}>Species</Label>
                </Col>
                <Col sm={12} md={9} style={{ textAlign: "center" }}>
                  <ButtonGroup>
                    <Button
                      color="success"
                      size="lg"
                      onClick={() => this.handleSpeciesChange("dog")}
                      active={this.state.species === "dog"}
                      style={{
                        borderColor: "#634839",
                        padding: "0%"
                      }}
                    >
                      <img src={dog} style={{ width: "20%" }} /> Dog
                    </Button>
                    <Button
                      size="lg"
                      color="success"
                      active={this.state.species === "cat"}
                      style={{
                        borderColor: "#634839",
                        padding: "0%"
                      }}
                      onClick={() => this.handleSpeciesChange("cat")}
                    >
                      <img src={cat} style={{ width: "20%" }} /> Cat
                    </Button>
                    <Button
                      size="lg"
                      color="success"
                      active={this.state.species === "bird"}
                      style={{
                        borderColor: "#634839",
                        padding: "0%"
                      }}
                      onClick={() => this.handleSpeciesChange("bird")}
                    >
                      <img src={bird} style={{ width: "20%" }} /> Bird
                    </Button>
                    <Button
                      size="lg"
                      color="success"
                      onClick={() => this.handleSpeciesChange("other")}
                      active={this.state.species === "other"}
                      style={{
                        borderColor: "#634839"
                      }}
                    >
                      Other
                    </Button>
                  </ButtonGroup>
                </Col>
                <Col sm={12} md={3} />
              </Row>
            </Container>

            <Container style={{ paddingBottom: "15px" }}>
              <Row>
                <Col sm={12} md={3} style={{ padding: "0%" }}>
                  <Label style={{ paddingTop: "10px" }}>Gender</Label>
                </Col>
                <Col sm={12} md={9} style={{ textAlign: "center" }}>
                  <ButtonGroup>
                    <Button
                      size="lg"
                      color="success"
                      onClick={() => this.handleGenderChange("female")}
                      active={this.state.gender === "female"}
                      style={{
                        borderColor: "#634839",
                        padding: "0%"
                      }}
                    >
                      <img src={female} style={{ width: "18%" }} /> Female
                    </Button>
                    <Button
                      size="lg"
                      color="success"
                      active={this.state.gender === "male"}
                      style={{
                        borderColor: "#634839",
                        padding: "0%"
                      }}
                      onClick={() => this.handleGenderChange("male")}
                    >
                      <img src={male} style={{ width: "18%" }} /> Male
                    </Button>
                    <Button
                      size="lg"
                      color="success"
                      active={this.state.gender === "male female"}
                      style={{
                        borderColor: "#634839",
                        padding: "0%"
                      }}
                      onClick={() => this.handleGenderChange("male female")}
                    >
                      <img src={unknown} style={{ width: "18%" }} />
                    </Button>
                  </ButtonGroup>
                </Col>

                <Col sm={12} md={5} />
              </Row>
            </Container>
            <FormGroup row>
              <Label sm={2}>City</Label>
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
                      <h4 className="text-center">
                        Pets that match this description:
                      </h4>
                      {this.state.filtered.map(notice => {
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
                              seenby={notice.seenby}
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
            <Alert
              color="success"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              Submitting your notice...
            </Alert>
            <FormGroup>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </FormGroup>
          </Form>
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
